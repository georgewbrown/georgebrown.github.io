$(document).ready(function () {
	$('#fullpage').fullpage({
		licenseKey: '',
		// anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		easingcss3: `cubic-bezier(0.175, 0.5, 0.5, 1)`,
		loopTop: false,
		loopBottom: true,
		navigation: true,
		navigationPosition: 'right',
		keyboardScrolling: true,
		controlArrows: true
	});
});

const overlay = document.getElementById("overlay-insert");
const projectText = document.getElementsByClassName("project-description");

function addOverlay() {

	const navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // grabs Dot Scroll Bar element

	dotScroll.classList.add("disabled"); // disables Dot Scroll Bar
	navBar.classList.add("disabled"); //disables Navigation Bar
	overlay.style.width = "100%";

	for (i = 0; i < projectText.length; i++) {
		if (projectText[i].style.opacity === 1) {
			projectText[i].style.opacity = 0;
		} else {
			projectText[i].style.opacity = 1;
		}
	}
}

function removeOverlay() {

	const navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // Dot Scroll Bar Bar element

	navBar.classList.remove("disabled"); // renables Dot Scroll Bar
	dotScroll.classList.remove("disabled"); // renables Navigation Bar
	overlay.style.width = "0%";

	for (i = 0; i < projectText.length; i++) {
		if (projectText[i].style.opacity === 0) {
			projectText[i].style.opacity = 1;
		} else {
			projectText[i].style.opacity = 0;
		}
	}

}