var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//HW REQUIREMENT 1
// Play: Play the video and update the volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = (video.volume * 100)+ "%"
});

//HW REQUIREMENT 2
// Pause button: Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

//HW REQUIREMENT 3
// Slow down: Slow the current video speed by 5% each time the button is clicked
// log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .95;
	video.play();
	console.log("Slowed down: " + video.playbackRate);
});

//HW REQUIREMENT 4
// Speed up: Increase the current video speed by each time the button is clicked
// log the new speed to the console
// Change it by an amount proportional to the slow down.
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.05;
	video.play();
	console.log("Sped up: " + video.playbackRate);
});

//HW REQUIREMENT 5
// Skip ahead: Advance the current video by 15 seconds.  
//If the video length has been exceeded - go back to the start of the video.   
// Log the current location of the video.
document.querySelector("#skip").addEventListener("click", function() {
	if ((video.currentTime + 15) > video.duration) {
		video.currentTime = 0
	}
	else {
		video.currentTime = video.currentTime + 15
	}
	console.log("Skipped 15 seconds. Current location: " + video.currentTime)
});

//HW REQUIREMENT 6
// Mute: Mute/unmute the video and update the text in the button.
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false) {
		video.muted = true;
		console.log("Unmuted");
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else { 
		video.muted = false;
		console.log("Muted");
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

//HW REQUIREMENT 7
// Volume slider: Change the volume based on the slider and update the volume information.
document.querySelector('#slider').addEventListener("change", function() {
	video.volume = this.value / 100
	document.querySelector('#volume').innerHTML = video.volume * 100 + "%"
	console.log("Volume changed to: " + video.volume)
});

//HW REQUIREMENT 8
// Styled: Utilize the existing oldSchool class on the video element

//HW REQUIREMENT 9
// Original: Remove the oldSchool class from the video.