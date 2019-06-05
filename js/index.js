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
