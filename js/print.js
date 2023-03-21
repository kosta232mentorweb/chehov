console.log( 'print' );

document.querySelector( '#makePrint' ).addEventListener( 'click', event => {
	document.forms[ 0 ].reset();
	window.print();
	// alert( 'printed' );
	location.reload();
} );