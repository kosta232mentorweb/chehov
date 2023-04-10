// function getDomPath( el ) {
// 	return el.name;
// }

const htmlSuffix = location.pathname.split( '/' ).slice( -1 )[ 0 ];
const htmlSuffixCrosswords = [ 'VS-1.html', 'FEST-VS-1.html' ]

function saveInputs() {
	const store0 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="radio"]' ) ].reduce( ( acc, el ) => {
		acc[ el.name + el.value ] = el.checked;
		return acc;
	}, {} );
	const store1 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea' ) ].reduce( ( acc, el ) => {
		acc[ el.name + ( htmlSuffixCrosswords.includes( htmlSuffix ) ? el.className.replaceAll( ' ', '_' ) : '' ) ] = el.value;
		return acc;
	}, {} );
	const store2 = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="checkbox"]' ) ].reduce( ( acc, el ) => {
		acc[ el.name ] = el.checked;
		return acc;
	}, {} );
	const store3 = [ ...document.forms[ 0 ].querySelectorAll( 'select' ) ].reduce( ( acc, el ) => {
		acc[ el.name ] = el.value;
		return acc;
	}, {} );

	const store = { ...store0, ...store1, ...store2, ...store3 };

	console.log( store );

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
			if ( el.disabled || el.readOnly ) return;
			el.checked = store[ el.name + el.value ] ?? false;

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

		document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea' ).forEach( el => {
			// console.log( el.value );
			// console.log( el.checked );
			if ( el.disabled || el.readOnly ) return;
			if ( store[ el.name ] !== undefined ) el.value = store[ el.name ];
			if ( htmlSuffixCrosswords.includes( htmlSuffix ) ) {
				if ( store[ ( htmlSuffixCrosswords.includes( htmlSuffix ) ? el.className.replaceAll( ' ', '_' ) : '' ) ] !== undefined )
					el.value = store[ ( htmlSuffixCrosswords.includes( htmlSuffix ) ? el.className.replaceAll( ' ', '_' ) : '' ) ];

			}

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

		document.forms[ 0 ].querySelectorAll( 'input[type="checkbox"]' ).forEach( el => {
			// console.log( el.value );
			// console.log( el.checked );
			if ( el.disabled || el.readOnly ) return;
			el.checked = store[ el.name ] ?? false;

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

		document.forms[ 0 ].querySelectorAll( 'select' ).forEach( el => {
			if ( el.disabled || el.readOnly ) return;
			if ( store[ el.name ] ) el.value = store[ el.name ];

			el.addEventListener( 'input', event => {
				saveInputs();
			} );
		} );

	}, 0 );

}

loadInputs();
