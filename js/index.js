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

// document.querySelector(".about-button").addEventListener('click', addStyling);


function addStyling() {
	let	darkenDiv = document.createElement('div');
	let divContainer = document.getElementsByClassName('insert-div');
	let buttonContainer = document.getElementsByClassName('button-container');

	
	darkenDiv.classList = "darken-div";
	divContainer[0].innerHTML = "Hello World!";
	console.log(buttonContainer);

	buttonContainer[0].style.display = "none";
	document.body.appendChild(darkenDiv);
}

// function openNav() {
// 	document.getElementById("myNav").style.width = "100%";
//   }