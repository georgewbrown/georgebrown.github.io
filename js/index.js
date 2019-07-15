$(document).ready(function () {
	$('#fullpage').fullpage({
		licenseKey: '',
		easingcss3: `cubic-bezier(0.175, 0.5, 0.5, 1)`,
		loopTop: false,
		loopBottom: true,
		navigation: true,
		navigationPosition: 'right',
		keyboardScrolling: true,
		controlArrows: false,
		slidesNavigation:false,
		scrollHorizontally: true,
		responsiveSlides: true,
		anchors:['home'],
		onLeave: () => {
			for (i = 0; i < overlay.length; i++) {
				overlay[i].style.width = "0%";
				projectText[i].style.opacity = 0;
			}
			removeOverlay();
		}
	});
});

const overlay = document.querySelectorAll(".overlay-insert");
const projectText = document.getElementsByClassName("project-description");

function addOverlay() {

	const navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	const bottomBar = document.getElementById('bottom-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // grabs Dot Scroll Bar element

	dotScroll.classList.add("disabled"); // disables Dot Scroll Bar
	navBar.classList.add("disabled"); //disables Navigation Bar
	bottomBar.classList.add("disabled"); //disables Bottom Bar

	for (i = 0; i < overlay.length; i++) {
		overlay[i].style.width = "100%";
	}
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
	const bottomBar = document.getElementById('bottom-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // Dot Scroll Bar Bar element
	
	navBar.classList.remove("disabled"); // renables Dot Scroll Bar
	dotScroll.classList.remove("disabled"); // renables Navigation Bar
	bottomBar.classList.remove("disabled"); //disables Bottom Bar

	for (i = 0; i < overlay.length; i++) {
		overlay[i].style.width = "0%";
	}


	for (i = 0; i < projectText.length; i++) {
		if (projectText[i].style.opacity === 0) {
			projectText[i].style.opacity = 1;
		} else {
			projectText[i].style.opacity = 0;
		}
	}

}