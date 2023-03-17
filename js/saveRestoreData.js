function saveInputs() {
	const store = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="text"]' ) ].reduce( ( acc, el ) => {
		acc[ getDomPath( el ) ] = el.value;
		return acc;
	}, {} );

	// console.log( store );

	localStorage.setItem( 'inputsValues', JSON.stringify( store ) );

}


let store = {};

const storeString = localStorage.getItem( 'inputsValues' );
if ( storeString ) store = JSON.parse( storeString );

// console.log( store );

document.forms[ 0 ].querySelectorAll( 'input[type="text"]' ).forEach( el => {
	el.value = store[ getDomPath( el ) ] ?? '';
} )

// console.log( store );
