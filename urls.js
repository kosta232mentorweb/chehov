const fs = require( 'fs' );

console.log( 'start' );
try {
	fs.rmSync( './distr', { recursive: true } );
} catch ( err ) {
	console.log( err );
}
fs.mkdirSync( './distr' );
fs.mkdirSync( './distr/html' );

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

update( '', 'index.html' );

const cssDir = fs.readdirSync( 'css' );
const jsDir = fs.readdirSync( 'js' );

console.log( cssDir );
console.log( jsDir );


var ncp = require( 'ncp' ).ncp;

ncp.limit = 16;

ncp( './css', './distr/css', function ( err ) {
	if ( err ) {
		return console.error( err );
	}
	console.log( 'done!' );
} );

ncp( './js', './distr/js', function ( err ) {
	if ( err ) {
		return console.error( err );
	}
	console.log( 'done!' );
} );