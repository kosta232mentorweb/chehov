console.log( 'vs-23' );

const img = document.querySelector( 'img#map' );

console.log( img );

img.addEventListener( 'click', e => {
	document.querySelector('input[type="submit"]').disabled = false;
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

document.querySelector( 'form[name="chehov-form-vs-23"]' ).addEventListener( 'submit', e => {
	console.log( e );
	console.log( coords.value );

	const a = coords.value.split( ', ' );
	console.log( a );

	if ( isNaN( Number( a[ 0 ] ) ) || isNaN( Number( a[ 1 ] ) ) ) {
		e.preventDefault();
		coords.style.border = '2px solid red';
	}
} )

const coords = document.querySelector( '[name="coords"]' );
console.log( coords );