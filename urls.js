const fs = require( 'fs' );

console.log( 'start' );

const htmlDir = fs.readdirSync( 'html' );

htmlDir.forEach( htmlFile => {
	console.log( '------------------------------------------------' );
	console.log( htmlFile );

	let text = fs.readFileSync( './html/' + htmlFile, { encoding: 'utf8' } );

	const repl1 = text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => ( el.includes( '../js/' ) || el.includes( 'images' ) ) );

	const repl2 = text.match( /(?<=href=")(.+?)(?=")/g ).filter( el => ( el.includes( '../css/' ) || el.includes( 'html' ) ) );

	const repl = [ ...repl1, ...repl2 ];

	console.log( repl );

	const r = {};

	repl.forEach( el => {
		console.log( el.split( '?' )[ 0 ] )
		console.log( el.split( '?' )[ 0 ] + '?kkey=' + Math.random() )
		r[ el.split( '?' )[ 0 ] ] = el.split( '?' )[ 0 ] + '?kkey=' + Math.random()
	} )

	console.log( r );

	for ( let key in r ) {
		text = text.replace( key, r[ key ] )
	}

	fs.writeFileSync( './distr/html/' + htmlFile, text );


} )