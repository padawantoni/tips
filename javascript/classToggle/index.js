const span = document.querySelector('span');
let classes = span.classList;

span.addEventListener('click', function () {
	let result = classes.toggle('active');

	if (result) {
		console.log('active class was added');
	} else {
		console.log('active class was removed');
	}
});
