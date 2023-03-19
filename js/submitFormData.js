console.log( 'submit form script' );

const chehovFormElement = document.forms[ 0 ];

const baseURL = 'http://localhost:3009'

document.querySelector( 'form' ).addEventListener( 'submit', event => {
	event.preventDefault();
	if ( document.forms[ 0 ].checkValidity() ) {
		console.log( 'checkvalid' );

		let formData = new FormData( document.forms[ 0 ] );
		formData.append( 'userId', document.querySelector( '#BookAASKey' ).value );
		formData.append( 'from', location.pathname.split( '/' ).at( -1 ) );

		fetch( baseURL + '/storeChehovData', {
			method: 'POST',
			body: formData
		} ).then( data => data.json() )
			.then( data => {
				console.log( data );
				// location.reload();
			} )

	}

	// return false;
} );
