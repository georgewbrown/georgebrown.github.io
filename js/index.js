$(document).ready(function(){
	$('#fullpage').fullpage({
		easingcss3: `cubic-bezier(0.175, 0.5, 0.5, 1)`,
		loopTop: false,
		loopBottom: true,
		navigation:true,
		navigationPosition: 'right',
		keyboardScrolling: true,
		controlArrows: true
	});
});

document.querySelector(".about-button").addEventListener('click', addStyling);


function addStyling() {
	darkenDiv = document.createElement("div");
	console.log("this works");
}