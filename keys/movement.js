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

// Minimize window
let minimizeWindow = new Key('n', MOD, () => {
    Window.focused().minimise();
});

let fullscreenWIndow = new Key('f', MOD, () => {
    let w = Window.focused();
    if ( w.isFullScreen() ) {
        Window.focused().setFullScreen(false);
    } else {
        Window.focused().setFullScreen(true);
    }
});

