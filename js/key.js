const BookAASKeyElement = document.querySelector( '#BookAASKey' );

let BookAASKey = localStorage.getItem( 'BookAASKey' ) ?? '';
BookAASKeyElement.value = BookAASKey;

BookAASKeyElement.addEventListener( 'input', ( event ) => {
	BookAASKey = event.target.value;
	localStorage.setItem( 'BookAASKey', BookAASKey );
} );

const BookAASKeyGlazElement = document.querySelector( '#BookAASKeyGlaz' );

let BookAASKeyElementTimeout;

BookAASKeyGlazElement.addEventListener( 'click', event => {
	clearTimeout( BookAASKeyElementTimeout );
	BookAASKeyElement.type = 'text';
	event.target.style.opacity = 0.3;

	BookAASKeyElementTimeout = setTimeout( () => {
		BookAASKeyElement.type = 'password';
		event.target.style.opacity = '';

	}, 3000 )
} )