const fs = require( 'fs' );

console.log( 'start' );

console.log( fs.readdirSync( 'html' ) );

const text = fs.readFileSync( './index.html', { encoding: 'utf8' } );

const repl = text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => ( el.includes( '../js/' ) || el.includes( 'images' ) ) );


console.log( repl );
repl.forEach( el => {
	console.log( el.split( '?' )[ 0 ] + '?kkey=' + Math.random() )
} )