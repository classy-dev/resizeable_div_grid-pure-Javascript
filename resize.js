
var trackRowArray = document.getElementsByClassName("sbTrack sbRow");
var trackColumnArray = document.getElementsByClassName("sbTrack sbColumn");

var splitterHorizontalArray = document.getElementsByClassName("sbSplitter sbHorizontal");
var splitterVerticalArray = document.getElementsByClassName("sbSplitter sbVertical");

for (let i = 0; i < splitterHorizontalArray.length; i++) {
    splitterHorizontalArray[i].addEventListener('mousedown', initDragHorizontal, false);
}
for (let i = 0; i < splitterVerticalArray.length; i++) {
    splitterVerticalArray[i].addEventListener('mousedown', initDragVertical, false);
}

var thisSplitter, myFamily, myPosition, myAboveDiv, myBelowDiv, myLeftDiv, myRightDiv, startX, startY, startHeightAbove, startHeightBelow, startWidthLeft, startWidthRight;
function initDragHorizontal(e) {
    thisSplitter = e.target;
    myFamily = [];
    for (let i = 0; i < e.path[1].children.length; i++) {
        myFamily.push(e.path[1].children[i])
    }
    myPosition = myFamily.indexOf(thisSplitter)
    myAboveDiv = myFamily[myPosition - 1];
    myBelowDiv = myFamily[myPosition + 1];
    startY = e.clientY;
    startHeightAbove = parseInt(document.defaultView.getComputedStyle(myAboveDiv).height, 10);
    startHeightBelow = parseInt(document.defaultView.getComputedStyle(myBelowDiv).height, 10);
    document.documentElement.addEventListener('mousemove', doDragHorizontal, false);
    document.documentElement.addEventListener('mouseup', stopDragHorizontal, false);
}

function doDragHorizontal(e) {
    myAboveDiv.style.height = (startHeightAbove + e.clientY - startY) + 'px';
    myBelowDiv.style.height = (startHeightBelow - e.clientY + startY) + 'px';
}
function stopDragHorizontal(e) {
    document.documentElement.removeEventListener('mousemove', doDragHorizontal, false);
    document.documentElement.removeEventListener('mouseup', stopDragHorizontal, false);
}

function initDragVertical(e) {
    thisSplitter = e.target;
    myFamily = [];
    for (let i = 0; i < e.path[1].children.length; i++) {
        myFamily.push(e.path[1].children[i])
    }
    myPosition = myFamily.indexOf(thisSplitter)
    myLeftDiv = myFamily[myPosition - 1];
    myRightDiv = myFamily[myPosition + 1];

    startX = e.clientX;
    startWidthLeft = parseInt(document.defaultView.getComputedStyle(myLeftDiv).width, 10);
    startWidthRight = parseInt(document.defaultView.getComputedStyle(myRightDiv).width, 10);
    document.documentElement.addEventListener('mousemove', doDragVertical, false);
    document.documentElement.addEventListener('mouseup', stopDragVertical, false);
}

function doDragVertical(e) {
    myLeftDiv.style.width = (startWidthLeft + e.clientX - startX) + 'px';
    myRightDiv.style.width = (startWidthRight - e.clientX + startX) + 'px';

}
function stopDragVertical(e) {
    document.documentElement.removeEventListener('mousemove', doDragVertical, false);
    document.documentElement.removeEventListener('mouseup', stopDragVertical, false);
}

