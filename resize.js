
var trackRowArray = document.getElementsByClassName("sbTrack sbRow");
var trackColumnArray = document.getElementsByClassName("sbTrack sbColumn");

var splitterHorizontalArray = document.getElementsByClassName("sbSplitter sbHorizontal");
var splitterVerticalArray = document.getElementsByClassName("sbSplitter sbVertical");

for (let i = 0; i < splitterHorizontalArray.length; i++) {
    splitterHorizontalArray[i].addEventListener('mousedown', initDragHorizontal, false);
    splitterHorizontalArray[i].addEventListener('touchstart', initDragHorizontal, false);
}
for (let i = 0; i < splitterVerticalArray.length; i++) {
    splitterVerticalArray[i].addEventListener('mousedown', initDragVertical, false);
    splitterVerticalArray[i].addEventListener('touchstart', initDragVertical, false);
}

var thisSplitter, myFamily, myPosition, myAboveDiv, myBelowDiv, myLeftDiv, myRightDiv, startX, startY, startHeightAbove, startHeightBelow, startWidthLeft, startWidthRight;
// Horizontal Resizing
function initDragHorizontal(e) {
    thisSplitter = e.target;
    myFamily = [];
    for (let i = 0; i < e.path[1].children.length; i++) {
        myFamily.push(e.path[1].children[i])
    }
    myPosition = myFamily.indexOf(thisSplitter)
    myAboveDiv = myFamily[myPosition - 1];
    myBelowDiv = myFamily[myPosition + 1];

    if (e.type == "mousedown")
        startMouseY = e.clientY;
    if (e.type == "touchstart")
        startTouchY = e.touches[0].clientY;
    startHeightAbove = parseInt(document.defaultView.getComputedStyle(myAboveDiv).height, 10);
    startHeightBelow = parseInt(document.defaultView.getComputedStyle(myBelowDiv).height, 10);
    document.documentElement.addEventListener('mousemove', doDragHorizontal, false);
    document.documentElement.addEventListener('mouseup', stopDragHorizontal, false);
    document.documentElement.addEventListener('touchmove', doDragHorizontal, false);
    document.documentElement.addEventListener('touchend', stopDragHorizontal, false);
}

function doDragHorizontal(e) {
    if (e.type == "mousemove") {
        myAboveDiv.style.height = (startHeightAbove + e.clientY - startMouseY) + 'px';
        myBelowDiv.style.height = (startHeightBelow - e.clientY + startMouseY) + 'px';
    }
    if (e.type == "touchmove") {
        myAboveDiv.style.height = (startHeightAbove + e.touches[0].clientY - startTouchY) + 'px';
        myBelowDiv.style.height = (startHeightBelow - e.touches[0].clientY + startTouchY) + 'px';
    }
    myAboveDiv.classList.remove("sbPanel")
    myBelowDiv.classList.remove("sbPanel")
}
function stopDragHorizontal(e) {
    document.documentElement.removeEventListener('mousemove', doDragHorizontal, false);
    document.documentElement.removeEventListener('mouseup', stopDragHorizontal, false);
    document.documentElement.addEventListener('touchmove', doDragHorizontal, false);
    document.documentElement.addEventListener('touchend', stopDragHorizontal, false);
}

// Vertical Resizing
function initDragVertical(e) {
    thisSplitter = e.target;
    myFamily = [];
    for (let i = 0; i < e.path[1].children.length; i++) {
        myFamily.push(e.path[1].children[i])
    }
    myPosition = myFamily.indexOf(thisSplitter)
    myLeftDiv = myFamily[myPosition - 1];
    myRightDiv = myFamily[myPosition + 1];
    if (e.type == "mousedown")
        startMouseX = e.clientX;
    if (e.type == "touchstart")
        startTouchX = e.touches[0].clientX;

    startWidthLeft = parseInt(document.defaultView.getComputedStyle(myLeftDiv).width, 10);
    startWidthRight = parseInt(document.defaultView.getComputedStyle(myRightDiv).width, 10);
    document.documentElement.addEventListener('mousemove', doDragVertical, false);
    document.documentElement.addEventListener('mouseup', stopDragVertical, false);
    document.documentElement.addEventListener('touchmove', doDragVertical, false);
    document.documentElement.addEventListener('touchend', stopDragVertical, false);
}

function doDragVertical(e) {
    if (e.type == "mousemove") {
        myLeftDiv.style.width = (startWidthLeft + e.clientX - startMouseX) + 'px';
        myRightDiv.style.width = (startWidthRight - e.clientX + startMouseX) + 'px';
    }
    if (e.type == "touchmove") {
        myLeftDiv.style.width = (startWidthLeft + e.touches[0].clientX - startTouchX) + 'px';
        myRightDiv.style.width = (startWidthRight - e.touches[0].clientX + startTouchX) + 'px';
    }
    myLeftDiv.classList.remove("sbPanel")
    myRightDiv.classList.remove("sbPanel")

}
function stopDragVertical(e) {
    document.documentElement.removeEventListener('mousemove', doDragVertical, false);
    document.documentElement.removeEventListener('mouseup', stopDragVertical, false);
    document.documentElement.addEventListener('touchmove', doDragVertical, false);
    document.documentElement.addEventListener('touchend', stopDragVertical, false);
}

