Phoenix.set ({
  openAtLogin: true
});

const MOD = ['ctrl', 'alt', 'cmd'];
const MOD_S = [...MOD, 'shift'];
const HALF_CORRECTION = 6; // Fix padding issues for half screen windows

var scr = Screen.main().flippedVisibleFrame();
// Padding Values
var paddingTop = 35;
var paddingLeft = 15;
var paddingRight = 30;
var paddingBottom = 25;
var paddingCenter = 10;
var paddingMiddle = 20;
// Computed sizes
var halfWidth = ((scr.width - paddingLeft) - paddingRight) / 2;
var halfHeight = (((scr.height - paddingTop) - paddingBottom) / 2) + HALF_CORRECTION;

var windowLocations = {
    full: {
        y: paddingTop,
        x: paddingLeft,
        width: scr.width - paddingRight,
        height: scr.height - paddingBottom
    },
    left: {
        y: paddingTop,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: scr.height - paddingBottom
    },
    right: {
        y: paddingTop,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: scr.height - paddingBottom
    },
    //Corners
    topRight: {
        y: paddingTop,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: halfHeight
    },
    bottomRight: {
        y: (halfHeight + paddingTop) + paddingMiddle,
        x: (halfWidth + paddingLeft) + paddingCenter,
        width: halfWidth,
        height: halfHeight
    },
    topLeft: {
        y: paddingTop,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: halfHeight
    },
    bottomLeft: {
        y: (halfHeight + paddingTop) + paddingMiddle,
        x: paddingLeft,
        width: halfWidth - paddingCenter,
        height: halfHeight
    }
}

// Move focused window to left or right half
var leftHalf = new Key('j', MOD, () => {
    Window.focused().setFrame(windowLocations.left);
});

var rightHalf = new Key('k', MOD, () => {
    Window.focused().setFrame(windowLocations.right);
});

// Move focused window to corners
var topRight = new Key('w', MOD, () => {
    Window.focused().setFrame(windowLocations.topRight);
});

var topLeft = new Key('q', MOD, () => {
    Window.focused().setFrame(windowLocations.topLeft);
});

var bottomRight = new Key('s', MOD, () => {
    Window.focused().setFrame(windowLocations.bottomRight);
});

var bottomLeft = new Key('a', MOD, () => {
    Window.focused().setFrame(windowLocations.bottomLeft);
});

// Maximize window (not fullscreen)
var maximizeWindow = new Key('m', MOD, () => {
    Window.focused().setFrame(windowLocations.full);//.maximize();
});

// Get focus on window in direction
var focusEast = new Key('d', MOD_S, () => {
    Window.focused().focusClosestNeighbor('east');
});

var focusNorth = new Key('w', MOD_S, () => {
    Window.focused().focusClosestNeighbor('north');
});

var focusWest = new Key('a', MOD_S, () => {
    Window.focused().focusClosestNeighbor('west');
});

var focusSouth = new Key('s', MOD_S, () => {
    Window.focused().focusClosestNeighbor('south');
});


