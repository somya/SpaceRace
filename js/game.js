
var gameParams = { lastScreen : 5 };
var currentGameState = { 
	screen : 1,
	lastGestureTime : new Date()
};


function resetGame()
{
	currentGameState = { screen : 1 };
	updateGame();
}

function moveToNextScreen()
{
	if (currentGameState.screen < gameParams.lastScreen)
	{
		currentGameState.screen++;
		playSound();
	}
	updateGame();
}

function updateGame()
{
	for (var i = 1; i <= gameParams.lastScreen; i++) {
		if (currentGameState.screen == i)
		{
			// show screen elements
			$("#bar_" + i).fadeIn();
			$("#subScreen_" + i).fadeIn();
			$("#screen_" + i).fadeIn();
			
		}
		else 
		{
			// hide screen elements
			$("#bar_" + i).fadeOut();
			$("#subScreen_" + i).fadeOut();
			$("#screen_" + i).fadeOut();
		}
	};
}

updateGame();

function onCategory1Click()
{
	moveToNextScreen();
	// alert("Clicked on category 1.");
}

function onCategory2Click()
{
	alert("Clicked on category 2.");
}

function onCategory3Click()
{
	alert("Clicked on category 3.");
}

function playSound()
{
	var audio = new Audio("audio/select.wav");
	audio.play();
}
function vectorToString(vector, digits) {
  if (typeof digits === "undefined") {
    digits = 1;
  }
  return "(" + vector[0].toFixed(digits) + ", "
             + vector[1].toFixed(digits) + ", "
             + vector[2].toFixed(digits) + ")";
}
 // Setup Leap loop with frame callback function
 var controllerOptions = {enableGestures: true};

 Leap.loop(controllerOptions, function(frame) {
  // Body of callback function
  //alert("Started Leap loop.");
  for (var i = 0; i < frame.pointables.length; i++) {
  	pointer = frame.pointables[i];
  }

  var gestureOutput = $("#gestureLog");
  var gestureString = "";
  if (frame.gestures.length > 0) {
  	
  	for (var i = 0; i < frame.gestures.length; i++) {
  		var gesture = frame.gestures[i];
  		// gestureString += "Gesture ID: " + gesture.id + ", "
  		// + "type: " + gesture.type + ", "
  		// + "state: " + gesture.state + ", "
  		// + "hand IDs: " + gesture.handIds.join(", ") + ", "
  		// + "pointable IDs: " + gesture.pointableIds.join(", ") + ", "
  		// + "duration: " + gesture.duration + " &micro;s, ";



  		switch (gesture.type) {
  			case "circle":
  			// gestureString += "center: " + vectorToString(gesture.center) + " mm, "
  			// + "normal: " + vectorToString(gesture.normal, 2) + ", "
  			// + "radius: " + gesture.radius.toFixed(1) + " mm, "
  			// + "progress: " + gesture.progress.toFixed(2) + " rotations";
  			break;
  			case "swipe":
  			gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, "
  			+ "current position: " + vectorToString(gesture.position) + " mm, "
  			+ "direction: " + vectorToString(gesture.direction, 2) + ", "
  			+ "speed: " + gesture.speed.toFixed(1) + " mm/s";
			if ( (new Date()) - currentGameState.lastGestureTime > 300)
  			{
  				moveToNextScreen();
  			}
  			currentGameState.lastGestureTime = new Date();
  			break;
  			case "screenTap":
  			case "keyTap":
  			gestureString += "position: " + vectorToString(gesture.position) + " mm, "
  			+ "direction: " + vectorToString(gesture.direction, 2);
  			break;
  			default:
  			gestureString += "unkown gesture type";
  		}
  		gestureString += "<br />";
  	}
  }
  gestureOutput.innerHTML = gestureString;
});