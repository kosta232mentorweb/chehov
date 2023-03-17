'use strict';

console.log( 'vs-1' );

document.forms[ 0 ].addEventListener( 'submit', event => {
	console.log( 'submit' );

	event.preventDefault();

	const NUMBER_OF_WORDS = 15;

	const res = [null];

	for ( let i = 1; i <= NUMBER_OF_WORDS; i++ ) {

		const className = 'word' + String( i ).padStart( 2, '0' );
		const words = document.querySelectorAll( '[class*="' + className + '"]' );

		console.log( '.word' + String( i ).padStart( 2, '0' ), words );

		const result = [ ...words ].reduce( ( acc, el ) => {
			// const wIdx = Number( el.className.split( 'word' )[ 1 ].split( '-' )[ 0 ] );
			const lIdx = parseInt( el.className.split( className )[ 1 ].split( '-' )[ 1 ] );
			// console.log( wIdx, lIdx );
			// if ( !acc[ wIdx ] ) acc[ wIdx ] = [];
			acc[ lIdx ] = lIdx;
			return acc;
		}, [] )

		res.push( result );
	}

	console.log(res);


	// 	const w = document.querySelectorAll( '[class*="word' + i + '"]' );
	// 	console.log( w );
	// }
} )