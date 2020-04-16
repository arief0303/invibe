document.addEventListener("DOMContentLoaded", function (event) {
    // DOM fully loaded and parsed

    function stackedCards() {
        // Our code will go here
    }

    stackedCards();
});

var stackedOptions = 'TopBottom'; // Change stacked cards view from 'Bottom', 'Top' or 'None'.
var rotate = true; // Activate the elements' rotation for each move on stacked cards.
var items = 3; // Number of visible elements when the stacked options are bottom or top.
var elementsMargin = 10; // Define the distance of each element when the stacked options are bottom or top.
var useOverlays = true; // Enable or disable the overlays for swipe elements.
var maxElements; // Total of stacked cards on the DOM.
var currentPosition = 0; // Keep the position of the active stacked card.
var velocity = 0.3; // Minimum velocity allowed to trigger a swipe.
var topObj; // Keep the swipe top properties.
var rightObj; // Keep the swipe right properties.
var leftObj; // Keep the swipe left properties.
var listElNodesObj; // Keep the list of nodes from stacked cards.
var listElNodesWidth; // Keep the stacked cards width.
var currentElementObj; // Keep the stacked card element to swipe.
var stackedCardsObj; // Hold the stacked elements on container.
var elementHeight; // Get the elements height
var obj; // Hold the stacked cards object.
var elTrans; // total of elements margin for calculations.
var addMargin; // Get the margin to calculate for each element


obj = document.getElementById('stacked-cards-block');
stackedCardsObj = obj.querySelector('.stackedcards-container');
listElNodesObj = stackedCardsObj.children;

// Overlay’s selectors        
topObj = obj.querySelector('.stackedcards-overlay.top');
rightObj = obj.querySelector('.stackedcards-overlay.right');
leftObj = obj.querySelector('.stackedcards-overlay.left');


listElNodesWidth = stackedCardsObj.offsetWidth;
currentElementObj = listElNodesObj[0];

//Prepare elements on DOM
addMargin = elementsMargin * (items -1) + 'px';

if(stackedOptions === "Top"){
	
	for(i = items; i < maxElements; i++){
		listElNodesObj[i].classList.add('stackedcards-top', 'stackedcards--animatable', 'stackedcards-origin-top');
	}

	elTrans = elementsMargin * (items - 1);

	stackedCardsObj.style.marginBottom = addMargin;

}