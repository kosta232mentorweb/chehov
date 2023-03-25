'use strict';

console.log( 'vs-1' );

document.forms[ 0 ].querySelectorAll( 'input[type="text"]' )
	.forEach( el => el.addEventListener( 'click', event => el.select() ) );



document.forms[ 0 ].querySelectorAll( 'input[type="text"]' )
	.forEach( el => {
		el.addEventListener( 'click', event => el.select() );

		el.addEventListener( 'input', event => {
			event.target.value = event.target.value.slice( -1 )?.toUpperCase() ?? '';
			console.log( event );

			saveInputs();

		} )
	} );


let crossWordText = {};

document.forms[ 0 ].addEventListener( 'submit', event => {
	event.preventDefault();

	const NUMBER_OF_WORDS = 15;

	const res = [ null ];

	for ( let i = 1; i <= NUMBER_OF_WORDS; i++ ) {

		const className = 'word' + String( i ).padStart( 2, '0' );
		const words = document.querySelectorAll( '[class*="' + className + '"]' );

		const result = [ ...words ].reduce(
			( acc, el ) => {
				const lIdx = parseInt( el.className.split( className )[ 1 ].split( '-' )[ 1 ] );
				acc[ lIdx ] = lIdx;
				return acc;
			}, [] )

		res.push( result );
	}

	console.log( res );

	const resWords = res.reduce( ( acc, w, idx ) => {
		if ( w ) {
			acc[ idx ] = w.reduce( ( acc2, el, idx2 ) => {
				return acc2 + document.querySelector( '.word' + String( idx ).padStart( 2, '0' ) + '-' + idx2 ).value;
			}, '' );
		}
		return acc;

	}, [] );

	console.log( resWords );

	crossWordText = resWords;

	// const formData = new FormData();
	// formData.append( 'words', JSON.stringify( resWords ) );

	// console.log( formData );
	// console.log( [ ...new URLSearchParams( formData ).entries() ] );
	// console.log( new URLSearchParams( formData ).toString() );

	// fetch( 'http://activepads.com:8082/formDetector?' + new URLSearchParams( formData ).toString(), {
	// 	headers: {
	// 		"Content-Type": "application/x-www-form-urlencoded",
	// 	},
	// 	method: "get",
	// } )
	// 	.then( data => data.text() )
	// 	.then( data => console.log( data ) );

} );

