console.log( 'print' );

document.querySelector( '#makePrint' ).addEventListener( 'click', event => {
	document.forms[ 0 ].reset();
	window.print();
	// alert( 'printed' );
	location.reload();
} );

// document.querySelector( '#makePrintWithValues' ).addEventListener( 'click', event => {
// 	document.forms[ 0 ].reset();
// 	window.print();
// 	// alert( 'printed' );
// 	// location.reload();
// } );

document.querySelector( '#clearForm' ).addEventListener( 'click', event => {
	if ( confirm( 'Точно сбросить форму?' ) ) {
		document.forms[ 0 ].reset();
		saveInputs();
	}
} );




// prev-next buttons

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

if ( ![ 'index.html', '' ].includes( location.pathname.split( '/' ).at( -1 ) ) ) {
	const prevNextContainer = document.createElement( 'div' );
	prevNextContainer.classList.add( 'prevNextContainer' );
	prevNextContainer

	const prevTask = document.createElement( 'div' );
	prevTask.innerHTML = `
	    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
		 <span class="longPrevNextCaption">предыдущее задание</span>
		 <span class="shortPrevNextCaption">предыдущее</span>
	`;
	prevTask.classList.add( 'prevTask' );
	document.querySelector( '.chehov-main-container .row .col-12' ).append( prevNextContainer );
	prevNextContainer.append( prevTask );
	prevTask.addEventListener( 'click', event => changeTask( -1 ) );

	const nextTask = document.createElement( 'div' );
	nextTask.innerHTML = `
	<span class="longPrevNextCaption">следующее задание</span>
	<span class="shortPrevNextCaption">следующее</span>
	<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8L4.646 2.354a.5.5 0 0 1 0-.708z"/></svg>	
	`;
	nextTask.classList.add( 'nextTask' );
	prevNextContainer.append( nextTask );
	nextTask.addEventListener( 'click', event => changeTask( 1 ) );
}



document.addEventListener( "keypress", event => {

	console.log( event.shiftKey, event.ctrlKey, event.altKey );

	if ( ( event.code === "KeyQ" ) && ( event.shiftKey ) && ( event.ctrlKey ) ) {

		if ( document.querySelectorAll( '.evgeniyLikeAnimation' ).length ) {
			document.querySelectorAll( '.evgeniyLikeAnimation' ).forEach( el => el.remove() );
		}

		const likeDiv = document.createElement( "div" );
		document.body.prepend( likeDiv );

		const likeChatBookLogo = document.createElement( "div" );
		likeDiv.append( likeChatBookLogo );

		const likeText = document.createElement( "div" );
		likeDiv.append( likeText );

		const likeHand = document.createElement( "div" );
		likeDiv.append( likeHand );

		likeDiv.classList.add( "evgeniyLikeAnimation" );
		likeChatBookLogo.classList.add( "likeChatBookLogo" );
		likeText.classList.add( "likeText" );
		likeHand.classList.add( "likeHand" );
		likeText.classList.add( "text-center" );

		likeText.innerHTML = "ПОДЕЛИСЬ!<br>che.bookaas.com";
	}
} );



Array.prototype.myForEach = function ( cb ) {
	const resArr = [];

	for ( let i = 0; i < this.length; i++ ) {
		resArr[ i ] = cb( this[ i ], i, this );
	}

	return resArr;
}