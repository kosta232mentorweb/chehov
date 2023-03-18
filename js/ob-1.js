console.log('ob-1');


document.forms[ 0 ].querySelectorAll( 'input[type="text"], textarea' )
	.forEach( el =>
		el.addEventListener( 'input', event => {
			saveInputs();
		} )
	);