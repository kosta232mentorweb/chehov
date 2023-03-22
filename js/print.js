console.log( 'print' );

document.querySelector( '#makePrint' ).addEventListener( 'click', event => {
	document.forms[ 0 ].reset();
	window.print();
	// alert( 'printed' );
	location.reload();
} );


tasksList = [
	'OB-1.html',
	'OB-2.html',
	'OB-3.html',
	'OB-4.html',
	'OB-5.html',
	'OB-6.html',
	'OB-7.html',
	'OB-8.html',
	'OB-9.html',
	'OB-10.html',
	'OB-11.html',
	'OB-12.html',
	'DV-1.html',
	'DV-2.html',
	'DV-3.html',
	'DV-4.html',
	'DV-5.html',
	'DV-6.html',
	'DV-7.html',
	'DV-8.html',
	'DV-9.html',
	'DV-10.html',
	'DV-11.html',
	'DV-12.html',
	'DV-13.html',
	'DV-14.html',
	'DV-15.html',
	'DV-16.html',
	'DV-17.html',
	'DV-18.html',
	'DV-19.html',
	'DV-20.html',
	'DV-21.html',
	'DV-22.html',
	'DV-23.html',
	'DV-24.html',
	'DV-25.html',
	'DV-26.html',
	'DV-27.html',
	'DV-28.html',
	'DV-29.html',
	'DV-30.html',
	'DV-31.html',
	'DV-32.html',
	'DV-33.html',
	'DV-34.html',
	'DV-35.html',
	'DV-36.html',
	'DV-37.html',
	'VS-1.html',
	'VS-2.html',
	'VS-3.html',
	'VS-4.html',
	'VS-5.html',
	'VS-6.html',
	'VS-7.html',
	'VS-8.html',
	'VS-9.html',
	'VS-10.html',
	'VS-11.html',
	'VS-12.html',
	'VS-13.html',
	'VS-14.html',
	'VS-15.html',
	'VS-16.html',
	'VS-17.html',
	'VS-18.html',
	'VS-19.html',
	'VS-20.html',
	'VS-21.html',
	'VS-22.html',
	'VS-23.html',
	'VS-24.html',
	'VS-25.html',
	'VS-26.html',
	'VS-27.html',
	'KZ-1.html',
	'KZ-2.html',
	'KZ-3.html',
	'KZ-4.html',
];

function changeTask( delta ) {
	console.log( 'changeTask' );
	console.log( arguments );
	const idx = tasksList.findIndex( el => el === location.pathname.split( '/' ).at( -1 ) )
	console.log( idx );
	let newIdx = idx + delta;
	if ( newIdx < 0 ) newIdx = tasksList.length - 1;
	if ( newIdx == tasksList.length ) newIdx = 0;
	location.href = location.href.replace( tasksList[ idx ], tasksList[ newIdx ] )
}

const prevTask = document.createElement( 'div' );
prevTask.innerHTML = '<';
prevTask.classList.add( 'prevTask' );
// document.querySelector( '.chehov-main-container' ).append( prevTask );
document.body.append( prevTask );
prevTask.addEventListener( 'click', event => changeTask( -1 ) );

const nextTask = document.createElement( 'div' );
nextTask.innerHTML = '>';
nextTask.classList.add( 'nextTask' );
document.body.append( nextTask );
nextTask.addEventListener( 'click', event => changeTask( 1 ) );