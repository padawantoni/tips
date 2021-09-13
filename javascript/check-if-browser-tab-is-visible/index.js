const video = document.getElementById('my-video');

const onVisibilitychange = () => {
	return document.hidden ? video.pause() : video.play();
};

document.addEventListener('visibilitychange', onVisibilitychange);
