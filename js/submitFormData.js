console.log( 'submit form script' );

const chehovFormElement = document.forms[ 0 ];

const baseURL = location.hostname === 'learn.bookaas.com' || location.hostname === 'che.bookaas.com'
	? 'https://che-server.bookaas.com'
	: 'http://localhost:3009';

document.querySelector( 'form' ).addEventListener( 'submit', event => {
	event.preventDefault();
	if ( document.forms[ 0 ].checkValidity() ) {
		console.log( 'checkvalid' );

		let formData = new FormData( document.forms[ 0 ] );
		formData.append( 'userId', document.querySelector( '#BookAASKey' ).value );
		const from = location.pathname.split( '/' ).at( -1 );
		formData.append( 'from', from );

		// const files = [ ...document.forms[ 0 ].querySelectorAll( 'input[type="file"]' ) ];

		// files.forEach( el => console.log( el.files ) );

		if ( from === 'VS-1.html' ) {
			formData.append( 'crossWordText', crossWordText );
		}

		fetch( baseURL + '/storeChehovData', {
			method: 'POST',
			body: formData
		} ).then( data => data.json() )
			.then( data => {
				console.log( data );
				alert( 'Ответ отправлен. Смотри сообщения бота.' )
				// location.reload();
			} ).catch( e => {
				alert( 'Ошибка отправки!' )
			} )

	}

	// return false;
} );
