//All the images of different bodys.
var carbodyImages = 
[
	"Images/Top/CarBody1.png", 
	"images/Top/CarBody2.png", 
	"images/Top/CarBody3.png",
	"images/Top/CarBody4.png",
];

//All the images of different colours.
var colourImages = 
[
	"images/body/Silver.png", 
	"images/body/Yellow.png",
	"images/body/Blue.png",
	"images/body/Dark Green.png",
	"images/body/Green.png",
	"images/body/Orange.png",
	"images/body/Purple.png",
	"images/body/Red.png",
];

//All the images of different wheels.
var wheelImages = 
[
	"images/wheels/SmallWheels.png", 
	"images/wheels/BigWheels.png", 
	"images/wheels/ReallyBigWheels.png", 
];

//All the images of different flags.
var flagImages = 
[
	"images/Flag/FlagBlue.png", 
	"images/Flag/FlagGreen.png", 
	"images/Flag/FlagRed.png",
	"images/Flag/FlagPink.png", 
	"images/Flag/FlagSmile.png", 
	"images/Flag/FlagYellow.png", 
	"images/Flag/NoFlag.png", 
];

//Each index for the body, colour, wheels and flags of this 'person'.
var flagIndex, carbodyIndex, colourIndex, wheelIndex;

//Set them all to 0 initially.
flagIndex = carbodyIndex = colourIndex = wheelIndex = 0;

//The current body, colour, wheels and flags elements. We will change the image of these elements.
var flagImage, carbodyImage, colourImage, wheelImage;


/**
 * Called when the page first loads.
*/
window.onload = function()
{
	//Get each element for the body, colour, wheels and flags.
	flagImage  = document.getElementById("flag-image");
	carbodyImage  = document.getElementById("carbody-image");
	colourImage = document.getElementById("colour-image");
	wheelImage  = document.getElementById("wheel-image");
	
	document.body.addEventListener("keypress", keyPress);
	
	//Set images initially
	onBodyChanged();

}


/**
 * Called when the user clicks the "randomize" button. 
*/
function randomizeBody()
{
	var cb = Math.floor (Math.random()*carbodyImages.length);
	onCarbodyChange(cb);
	var co = Math.floor (Math.random()*colourImages.length);
	onColourChange(co);
	var we = Math.floor (Math.random()*wheelImages.length);
	onWheelChange(we);
	var fi = Math.floor (Math.random()*flagImages.length);
	onFlagChange(fi);
}


/** 
 * Updates the selector box text with the current body, colour, wheels and flags indices
*/
function updateSelectorBox()
{
	//Get the element we're going to change
	var selectorBox = document.getElementById("selector-box");
	
	//Set it's value to nothing, reset it.
	selectorBox.value = "";
	
	//Finally, just append each index to the string
	selectorBox.value += ("flag: "+ flagIndex + " | ")
	selectorBox.value += ("carbody: " + carbodyIndex  + " | ");
	selectorBox.value += ("colour: " + colourIndex + " | ");
	selectorBox.value += ("wheel size: " + wheelIndex);
}

/**
 * Called when the flag of the car is changed.
*/
function onFlagChange(offset)
{
	//Find the index which is offset from the current flag index by the given offset.
	var offsetIndex = (flagIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		flagIndex = flagImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		flagIndex = (flagIndex + offset) % flagImages.length;
	
	//Fire callback for when the body has changed
	onBodyChanged();
}

/**
 * Called when the body of the car is changed.
*/
function onCarbodyChange(offset)
{
	//Find the index which is offset from the current body index by the given offset.
	var offsetIndex = (carbodyIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		carbodyIndex = carbodyImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		carbodyIndex = (carbodyIndex + offset) % carbodyImages.length;
	
	//Fire callback for when the body has changed
	onBodyChanged();
}


/**
 * Called when the colour of the car is changed.
*/
function onColourChange(offset)
{
	//Find the index which is offset from the current colour index by the given offset.
	var offsetIndex = (colourIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		colourIndex = colourImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		colourIndex = (colourIndex + offset) % colourImages.length;
	
	//Fire callback for when the body has changed
	onBodyChanged();
}


/**
 * Called when the wheels of the car is changed.
*/
function onWheelChange(offset)
{
	//Find the index which is offset from the current wheels index by the given offset.
	var offsetIndex = (wheelIndex + offset);
	
	//If it's negative, set the index to the last image:
	if(offsetIndex < 0)
		wheelIndex = wheelImages.length + offset;
	
	//Otherwise just add the offset and modulo by the length to "wrap around" the values
	else
		wheelIndex = (wheelIndex + offset) % wheelImages.length;
	
	//Fire callback for when the body has changed
	onBodyChanged();
}


/**
 * Called when the user has changed the car in some way by choosing a different body, colour, wheels and flags.
*/
function onBodyChanged()
{
	//Update the display showing which indices these are.
	updateSelectorBox();
	
	//Set flag, body, colour and wheels images
	flagImage.src = flagImages[flagIndex];
	carbodyImage.src = carbodyImages[carbodyIndex];
	colourImage.src = colourImages[colourIndex];
	wheelImage.src = wheelImages[wheelIndex];
}


/**
 * Saves the current selection of flag, body, colour and wheels to local storage for retrieval later.
*/
function saveSelection()
{
	localStorage.setItem("chosenFlag" , flagIndex)
	localStorage.setItem("chosenCarbody" , carbodyIndex);
	localStorage.setItem("chosenColour", colourIndex);
	localStorage.setItem("chosenWheel" , wheelIndex);
}


/**
 * Loads the selection stored in local storage onto the page
*/
function loadSelection()
{
	flagIndex  = localStorage.getItem("chosenFlag");
	carbodyIndex  = localStorage.getItem("chosenCarbody");
	colourIndex = localStorage.getItem("chosenColour");
	wheelIndex  = localStorage.getItem("chosenWheel");

	onBodyChanged();
}

function keyPress(offset)
{

var x = event.key;

if (x == "x" || x == "X") 
{ 
   	if(offsetIndex < 1){
	carbodyIndex = (carbodyIndex + offset) % carbodyImages.length;
	}
}

var z = event.key;

if (z == "z" || z == "Z")
{
		if(offsetIndex < 0){
	carbodyIndex = carbodyImages.length + offset;
		}
}
}