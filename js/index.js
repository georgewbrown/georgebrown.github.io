$(document).ready(function () {
	$('#fullpage').fullpage({
		licenseKey: '',
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		easingcss3: `cubic-bezier(0.175, 0.5, 0.5, 1)`,
		loopTop: false,
		loopBottom: true,
		navigation: true,
		navigationPosition: 'right',
		keyboardScrolling: true,
		controlArrows: true
	});
});

let overlay = document.getElementById("overlay-insert");

document.querySelector(".about-button").addEventListener('click', addOverlay);


function addOverlay() {
	// TODO: Make local vars global
	let navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	let dotScroll = document.getElementById('fp-nav'); // grabs Dot Scroll Bar element

	dotScroll.classList.add("disabled"); // disables Dot Scroll Bar
	navBar.classList.add("disabled"); //disables Navigation Bar
	overlay.style.width = "100%";
}

function removeOverlay() {
	// TODO: Make local vars global
	let navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	let dotScroll = document.getElementById('fp-nav'); // Dot Scroll Bar Bar element

	navBar.classList.remove("disabled"); // renables Dot Scroll Bar
	dotScroll.classList.remove("disabled"); // renables Navigation Bar
	overlay.style.width = "0%";
}

window.addEventListener(scroll, () => {
	console.log('scrolled');
});