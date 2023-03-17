'use strict';

console.log( 'ob-2' );

const switches = document.querySelectorAll( '[role="switch"]' );

switches.forEach( el => {
	el.addEventListener( 'input', event => {
		const res = document.querySelectorAll( '.result .r' );

		res.forEach( ( el, idx ) => {
			el.classList.remove( 'r-true', 'r-false' );
			if ( switches[ idx ].checked ) el.classList.add( 'r-true' );
			else el.classList.add( 'r-false' )
		} )

	} )
} )