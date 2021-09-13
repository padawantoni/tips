import React, { useState } from 'react';
import axios from 'axios';

export const Newsletter = () => {
	const dataEntity = 'vtex-entity';
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState({});
	const [loading, setLoading] = useState(false);

	const sendEmail = (email) => {
		setMessage({});
		setLoading(true);

		if (email == '') {
			setMessage({
				alert: 'Nos informe seu endereço de email!',
				type: 'error',
			});
			setLoading(false);
			setTimeout(() => {
				setMessage({});
			}, 3000);
		} else {
			axios.get(`/api/dataentities/${dataEntity}/search?email=${email}&_fields=email`).then(function (response) {
				if (response.data.length != 0) {
					setMessage({
						alert: 'Endereço de email já cadastrado, tente outro!',
						type: 'error',
					});
					setLoading(false);
					setTimeout(() => {
						setMessage({});
					}, 3000);
				} else {
					axios
						.patch(`/api/dataentities/${dataEntity}/documents`, { email })
						.then(function (response) {
							setMessage({
								alert: 'CADASTRADO COM SUCESSO!',
								type: 'success',
							});
							setLoading(false);
							// setTimeout(() => { setMessage({}) }, 3000);
						})
						.catch(function (error) {
							console.warn('Newsletter error:', error.message);
							setTimeout(() => {
								setMessage({});
							}, 3000);
							setLoading(false);
						});
				}
			});
		}
	};

	return (
		<div className='newsletter'>
			<h6>
				Quer saber primeiro das melhores
				<br /> promos e novidades?
			</h6>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (!loading) sendEmail(email);
				}}
			>
				<input
					id='email'
					placeholder='Digite seu e-mail'
					aria-label='Digite seu e-mail'
					value={email}
					type='email'
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button className={loading ? `loading btn email` : `btn email`} aria-label='Enviar e-mail' type='submit'>
					enviar
				</button>

				{message.type === 'error' && <div className='messages error-type'>{message.alert}</div>}
			</form>

			{message.type === 'success' && (
				<div className='messages success-type'>
					<h6>{message.alert}</h6>

					<div className='messages-content'>
						<span>
							{' '}
							Em breve você receberá <br /> nossas novidades{' '}
						</span>
						<button
							className='message-reset'
							aria-label='message-reset'
							onClick={(e) => {
								setEmail('');
								setMessage({});
							}}
						>
							voltar
						</button>
					</div>
				</div>
			)}

			{message.type != 'success' && (
				<div className='social-links'>
					<ul>
						<li>social icon</li>
						<li>social icon</li>
						<li>social icon</li>
					</ul>
				</div>
			)}
		</div>
	);
};
