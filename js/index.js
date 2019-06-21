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
		controlArrows: true,
		onLeave: () => { // janky solution
			for ( i = 0; i < overlay.length; i++) {
				overlay[i].style.width = "0%" ;
				projectText[i].style.opacity = 0;
			}
		}
	});
});

const body = document.body;
const overlay = document.querySelectorAll(".overlay-insert");
const projectText = document.getElementsByClassName("project-description");

function addOverlay() {
	// const innerHtml = body.innerHTML;
	const navBar = document.getElementById('nav-bar'); // grabs Navigation Bar element
	const dotScroll = document.getElementById('fp-nav'); // grabs Dot Scroll Bar element

	console.log(body);
	dotScroll.classList.add("disabled"); // disables Dot Scroll Bar
	navBar.classList.add("disabled"); //disables Navigation Bar
// 	BUG RETURNS LOOPS TWICE THROUGH ARRAY
// 	for ( j = 0; j < overlay.length; j++ ) {
// 		if (overlay[j] === overlay[0] && innerHtml.includes('fp-viewing-2')) {
// 		overlay[0].style.width = "100%";
// 		}else if (overlay[j] === overlay[1] && innerHtml.includes('fp-viewing-4')) {
// 		overlay[1].style.width = "100%";
// 		} else {
// 		console.log('it broke');
// }
// }
for ( i = 0; i < overlay.length; i++) {
	overlay[i].style.width = "100%" ;
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
	const dotScroll = document.getElementById('fp-nav'); // Dot Scroll Bar Bar element

	navBar.classList.remove("disabled"); // renables Dot Scroll Bar
	dotScroll.classList.remove("disabled"); // renables Navigation Bar
// 	BUG RETURNS LOOPS TWICE THROUGH ARRAY
// 	for ( j = 0; j < overlay.length; j++ ) {
// 		if (overlay[j] === overlay[0]) {
// 		overlay[0].style.width = "0%";
// 		break;
// 		}else if (overlay[j] === overlay[1]) {
// 		overlay[1].style.width = "0%";
// 		break;
// 		} else {
// 		console.log('How ya doin');
// }
// 			console.log(j);

// 			console.log(overlay[0], overlay[1] == overlay[j], overlay[j], j);
// 		}
for ( i = 0; i < overlay.length; i++) {
	overlay[i].style.width = "0%" ;
}


	for (i = 0; i < projectText.length; i++) {
		if (projectText[i].style.opacity === 0) {
			projectText[i].style.opacity = 1;
		} else {
			projectText[i].style.opacity = 0;
		}
	}

}