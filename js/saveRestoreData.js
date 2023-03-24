const htmlSuffix = location.pathname.split( '/' ).slice( -1 )[ 0 ];

function saveInputs() {
	const store = [ ...document.forms[ 0 ]?.querySelectorAll( 'input[type="text"], textarea' ) ].reduce( ( acc, el ) => {
		acc[ getDomPath( el ) ] = el.value;
		return acc;
	}, {} );

	// console.log( store );

	localStorage.setItem( 'inputsValues' + htmlSuffix, JSON.stringify( store ) );
}

let store = {};

const storeString = localStorage.getItem( 'inputsValues' + htmlSuffix );
if ( storeString ) store = JSON.parse( storeString );

console.log( store );

document.forms[ 0 ]?.querySelectorAll( 'input[type="text"], textarea' ).forEach( el => {
	el.value = store[ getDomPath( el ) ] ?? '';

	el.addEventListener( 'input', event => {
		saveInputs();
	} );
} );

// console.log( store );
