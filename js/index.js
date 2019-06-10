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
	let	darkenDiv = document.createElement('div');
	let divContainer = document.getElementsByClassName('insert-div');
	let paddingDiv = document.getElementsByClassName('padding-div');
	let buttonContainer = document.getElementsByClassName('button-container');

	
	darkenDiv.classList = "darken-div";
	divContainer[0].innerHTML = "Hello World!";
	console.log(buttonContainer);
	paddingDiv.removeChild(buttonContainer);

	document.body.appendChild(darkenDiv);
}