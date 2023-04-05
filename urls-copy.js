const fs = require( 'fs' );
const fse = require( 'fs-extra' );

const UglifyJS = require( "uglify-js" );


const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );

var CleanCSS = require( 'clean-css' );
const cleanCSSoptions = {};

console.log( 'start' );

var ncp = require( 'ncp' ).ncp;

ncp.limit = 16;

setTimeout( () => {
	console.log( 'Очистка zadanija в distr' );
	fse.emptyDirSync( 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija' );


	console.log( 'distr' );
	ncp( './distr', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\', function ( err ) {
		if ( err ) {
			return console.error( err );
		}
		console.log( 'done!' );
	} );

	console.log( 'images' );
	ncp( './images', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\images', function ( err ) {
		if ( err ) {
			return console.error( err );
		}
		console.log( 'done!' );
	} );

	// console.log( 'html' );
	// ncp( './distr/html', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\html', function ( err ) {
	// 	if ( err ) {
	// 		return console.error( err );
	// 	}
	// 	console.log( 'done!' );
	// } );



}, 2000 );

