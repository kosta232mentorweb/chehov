// function getDomPath( el ) {
// 	return el.name;
// }

const htmlSuffix = location.pathname.split( '/' ).slice( -1 )[ 0 ];

function saveInputs() {
	const store0 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="radio"]' ) ].reduce( ( acc, el ) => {
		acc[ el.name + el.value ] = el.checked;
		return acc;
	}, {} );
	const store1 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea' ) ].reduce( ( acc, el ) => {
		acc[ el.name ] = el.value;
		return acc;
	}, {} );
	const store2 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="checkbox"]' ) ].reduce( ( acc, el ) => {
		acc[ el.name ] = el.checked;
		return acc;
	}, {} );

	const store = { ...store0, ...store1, ...store2 };

	// console.log( store );

	localStorage.setItem( 'inputsValues' + htmlSuffix, JSON.stringify( store ) );
}

let store = {};

function loadInputs() {

	const storeString = localStorage.getItem( 'inputsValues' + htmlSuffix );
	if ( storeString ) store = JSON.parse( storeString );

	console.log( 'store', store );
	// console.log( document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea, input[type="checkbox"]' ) );

	setTimeout( () => {

		document.forms[ 0 ].querySelectorAll( 'input[type="radio"]' ).forEach( el => {
			// console.log( el.value );
			// console.log( el.checked );
			el.checked = store[ el.name + el.value ] ?? '';

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

		document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea' ).forEach( el => {
			console.log( el.value );
			console.log( el.checked );
			el.value = store[ el.name ] ?? '';

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

		document.forms[ 0 ].querySelectorAll( 'input[type="checkbox"]' ).forEach( el => {
			// console.log( el.value );
			// console.log( el.checked );
			el.checked = store[ el.name ] ?? '';

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

	}, 0 );

}

loadInputs();
