const image = document.querySelector('.observe-me');

observer = new IntersectionObserver((entries) => {
	const [myImg] = entries;
	if (myImg.intersectionRatio > 0) {
		myImg.target.classList.add('visible');
	} else {
		myImg.target.classList.remove('not-visible');
	}
});

observer.observe(image);
