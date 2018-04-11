let info = new Key('i', MOD, () => {
    const windows = Space.active ().windows ();

    for ( window of windows) {

        if ( window.isVisible && !window.isMinimized() ) {

            windowFrame = window.frame();
            screen = Screen.main().flippedVisibleFrame();

            Modal.build({
                origin( modal ) {
                    return {
                        x: windowFrame.x + ( windowFrame.width / 2) - ( modal.width / 2 ),
                        y: ( screen.height - windowFrame.y ) - ( windowFrame.height / 2 ) - ( modal.height / 2 )
                    }
                },
                weight: 24,
                duration: 1,
                appearance: 'dark',
                icon: window.app().icon(),
                text: window.app().name()
            }).show();
        }
    }
});