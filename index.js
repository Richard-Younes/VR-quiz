/** @format */
// Get the camera element
const camera = document.querySelector('#player');

// Disable arrow keys for forward and backward movement
camera.addEventListener('componentinitialized', function (event) {
	if (event.detail.name === 'wasd-controls') {
		camera.components['wasd-controls'].data.keys = [];
	}
});
