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
	'FEST-DV-1.html',
	'FEST-DV-2.html',
	'FEST-DV-3.html',
	'FEST-DV-4.html',
	'FEST-DV-5.html',
	'FEST-VS-1.html',
	'FEST-VS-2.html',
	'FEST-VS-3.html',
	'FEST-VS-4.html',
	'FEST-VS-5.html',
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