console.log( 'vs-23' );

const img = document.querySelector( 'img#map' );

console.log( img );

img.addEventListener( 'click', e => {
	console.log( e );
	console.log( e.offsetX );
	console.log( e.offsetY );
	coords.value = ( e.offsetX / e.target.width * 100 ).toFixed() + ', ' + ( e.offsetY / e.target.height * 100 ).toFixed();

	let circle = document.querySelector( '.circle' );
	if ( !circle ) {
		circle = document.createElement( 'div' );
		circle.classList.add( 'circle' );
		img.after( circle );
	}
	circle.style.left = e.offsetX - 10 + 'px';
	circle.style.top = e.offsetY - 10 + 'px';

} );

const coords = document.querySelector( '[name="coords"]' );
console.log( coords );