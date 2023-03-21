const fs = require( 'fs' );

console.log( 'start' );

const htmlDir = fs.readdirSync( 'html' );

htmlDir.forEach( htmlFile => {
	console.log( '------------------------------------------------' );
	console.log( htmlFile );

	update( 'html/', htmlFile );

} )

function update( path, fileName ) {
	let text = fs.readFileSync( './' + path + fileName, { encoding: 'utf8' } );

	const src = text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => ( el.includes( '../js/' ) || el.includes( 'images' ) ) );

	const href = text.match( /(?<=href=")(.+?)(?=")/g ).filter( el => ( el.includes( '../css/' ) || el.includes( 'html' ) ) );

	const repl = [ ...src, ...href ];

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

	fs.writeFileSync( './distr/' + path + fileName, text );
}

update( '', 'index.html' )