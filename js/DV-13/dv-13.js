console.log( 'dv-13' );

const img = document.querySelector( 'img#map' );

img.addEventListener( 'click', e => {
	document.querySelector( 'input[type="submit"]' ).disabled = false;

	const id = 1;

	coords[ id - 1 ].value = ( e.offsetX / e.target.width * 100 ).toFixed() + ', ' + ( e.offsetY / e.target.height * 100 ).toFixed();

	let circle = document.querySelector( '.circle-' + id );
	if ( !circle ) {
		circle = document.createElement( 'div' );
		circle.classList.add( 'circle', 'circle-' + id );
		img.after( circle );
	}
	circle.style.left = e.offsetX - 10 + 'px';
	circle.style.top = e.offsetY - 10 + 'px';

} );

document.querySelector( 'form[name="chehov-form-dv-13"]' ).addEventListener( 'submit', e => {

	document.querySelectorAll( '[type="radio"]' ).forEach( el => el.remove() );
	// const a = coords.value.split( ', ' );
	// console.log( a );

	// if ( isNaN( Number( a[ 0 ] ) ) || isNaN( Number( a[ 1 ] ) ) ) {
	// 	e.preventDefault();
	// 	coords.style.border = '2px solid red';
	// }
} )

const coords = document.querySelectorAll( '[name*="coords"]' );
// console.log( coords );