$(document).ready(function () {
	$('#fullpage').fullpage({
		easingcss3: `cubic-bezier(0.175, 0.5, 0.5, 1)`,
		loopTop: false,
		loopBottom: true,
		navigation: true,
		navigationPosition: 'right',
		keyboardScrolling: true,
		controlArrows: true
	});
});

document.querySelector(".about-button").addEventListener('click', addOverlay);

let overlay = document.getElementById("overlay-insert");

function addOverlay() {
	// TODO: Make local var global
	let navBar = document.getElementById('nav-bar');
	navBar.classList.add("disabled");
	overlay.style.width = "100%";
}


function removeOverlay() {
	// TODO: Make local var global
	let navBar = document.getElementById('nav-bar');
	navBar.classList.remove("disabled");
	overlay.style.width = "0%";
}