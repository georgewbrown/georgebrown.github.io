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

const projectText = document.getElementsByClassName("project-description");
const overlay = document.getElementsByClassName("overlay-insert");

function addOverlay() {

	const navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // grabs Dot Scroll Bar element

	dotScroll.classList.add("disabled"); // disables Dot Scroll Bar
	navBar.classList.add("disabled"); //disables Navigation Bar
	for ( var j = 0, len = overlay.length; j < len; j++ ) {
		if (j === 0) {
		overlay[j].style.width = "100%";
		}else if (j === 1) {
		overlay[j].style.width = "100%";
		} else {
		overlay[j].style.width = "100%";
		}
		// switch (o) {
			// 	case 1:
			// 	overlay[1].style.width = "100%";
			// 	break;
			// 	case 2:
			// 	overlay[2].style.width = "100%";
			// 	break;
			// 	case 3:
			// 	overlay[3].style.width = "100%";
			// 	break;
			// 	case 4:
			// 	overlay[4].style.width = "100%";
			// 	break;
			// 	default:
			// 	overlay[0].style.width = "100%";
			// }
			console.log(j);

		}
		console.log(overlay, j);

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

		switch (o){
			case 1:
			overlay[1].style.width = "0%";
			break;
			case 2:
			overlay[2].style.width = "0%";
			break;
			case 3:
			overlay[3].style.width = "0%";
			break;
			case 4:
			overlay[4].style.width = "0%";
			break;
			default:
			overlay[0].style.width = "0%";
		}
	

	for (i = 0; i < projectText.length; i++) {
		if (projectText[i].style.opacity === 0) {
			projectText[i].style.opacity = 1;
		} else {
			projectText[i].style.opacity = 0;
		}
	}

}