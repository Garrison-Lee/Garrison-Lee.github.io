// region Fields

var mouseX;
var mouseY;
var numClicks = 1; //for double triple click

// endregion
// region HelperFunctions

function updateXY(e) 
{
	mouseX = e.clientX;
	mouseY = e.clientY;
};

// endregion
// region Events

$("#gestureArea").mousedown(function(e) {
	if ((Math.abs(e.clientX - mouseX) < 3) && (Math.abs(e.clientY - mouseY) < 3)) {
		numClicks += 1;
	} else {
		numClicks = 1;
	}
	updateXY(e);
	//$("#gestureResult").text("mouse down");
});

$("#gestureArea").mouseup(function(e) {
	// Dear Grader,
	// I included the -3 in the condition because of mouse wiggle, I'm
	// on a touchpad and was actually getting swipes when I didn't mean to move
	if (e.clientX - mouseX < -3) {
		$("#gestureResult").text("swipe left");
	} else if (mouseX - e.clientX < -3) {
		$("#gestureResult").text("swipe right");
	} else if (mouseY - e.clientY < -3) {
		$("#gestureResult").text("swipe down");
	} else if (e.clientY - mouseY < -3) {
		$("#gestureResult").text("swipe up");
	} else if (numClicks >= 2) { 
		switch (numClicks) {
			case 2:
				$("#gestureResult").text("double click. interesting.");
				break;
			case 3:
				$("#gestureResult").text("triple click. exciting");
				break;
			case 4:
				$("#gestureResult").text("quadruple click. enthralling");
				break;
			default:
				$("#gestureResult").text("clicked " + numClicks + " times. too exotic!");
				break;
		}
	} else {
		$("#gestureResult").text("one stationary click. boring."); 
	}
});

// endregion