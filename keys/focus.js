let focus = ( direction ) => {
    let neighbors = Window.focused().neighbors( direction );

    if ( neighbors === undefined || neighbors.length > 0 ) {
        let index = 0;

        while ( index < neighbors.length ) {
            if ( neighbors[index] === undefined) { return; }

            if( !neighbors[index].isVisible() ) {
                index++;
            } else { break; }
        }

        if ( neighbors[index] === undefined ) { return; }

        neighbors[index].focus();
    }
}

// Get focus on window in direction
var focusEast = new Key('d', MOD_S, () => {
    focus( 'east' );
});

var focusNorth = new Key('w', MOD_S, () => {
    focus( 'north' );
});

var focusWest = new Key('a', MOD_S, () => {
    focus( 'west' );
});

var focusSouth = new Key('s', MOD_S, () => {
    focus( 'south' );
});

