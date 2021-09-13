vtexjs.checkout.getOrderForm().then(function (response) {
	if (response.loggedIn) {
		let { email, firstName } = response.clientProfileData,
			welcomeName = firstName == null ? email : firstName;

		$('.header__options').addClass('logged');
		$('.welcome-msg').text(`Olá, ${welcomeName}`);
	} else {
		$('.header__options').removeClass('logged');
	}
});
