 
function onCategory1Click()
{
	alert("Clicked on category 1.");
}

function onCategory2Click()
{
	alert("Clicked on category 2.");
}

function onCategory3Click()
{
	alert("Clicked on category 3.");
}

 // Setup Leap loop with frame callback function
 var controllerOptions = {enableGestures: true};

 Leap.loop(controllerOptions, function(frame) {
  // Body of callback function
  //alert("Started Leap loop.");
  for (var i = 0; i < frame.pointables.length; i++) {
  	pointer = frame.pointables[i];
  }

  if (frame.gestures.length > 0) {
  	if (pauseOnGesture) {
  		togglePause();
  	}
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
  			// gestureString += "start position: " + vectorToString(gesture.startPosition) + " mm, "
  			// + "current position: " + vectorToString(gesture.position) + " mm, "
  			// + "direction: " + vectorToString(gesture.direction, 2) + ", "
  			// + "speed: " + gesture.speed.toFixed(1) + " mm/s";
  			onCategory1Click();
  			break;
  			case "screenTap":
  			case "keyTap":
  			// gestureString += "position: " + vectorToString(gesture.position) + " mm, "
  			// + "direction: " + vectorToString(gesture.direction, 2);
  			break;
  			default:
  			// gestureString += "unkown gesture type";
  		}
  		// gestureString += "<br />";
  	}
  }
});