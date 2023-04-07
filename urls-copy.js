const fs = require( 'fs' );
const fse = require( 'fs-extra' );

const UglifyJS = require( "uglify-js" );


const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );

var CleanCSS = require( 'clean-css' );
const cleanCSSoptions = {};

console.log( 'start' );




const getFilelistRecursively = ( ( targetpath, depth = -1 ) => {
	let result = [];
	let dirs = fs.readdirSync( targetpath );
	dirs.forEach( file => {
		let filepath = targetpath + "/" + file;
		if ( fs.lstatSync( filepath ).isDirectory() ) {
			if ( depth == 0 ) return result;
			result = result.concat( getFilelistRecursively( filepath, depth - 1 ) );
		} else {
			result.push( filepath );
		}
	} );
	return result;
} );
// console.log( getFilelistRecursively( "./distr", 10 ) );

// process.exit( 0 );




// try {
fse.emptyDirSync( './distr' );
// } catch ( err ) {
// console.log( err );
// }

// process.exit( 0 );

// fs.mkdirSync( './distr' );
fs.mkdirSync( './distr/html' );

const htmlDir = fs.readdirSync( 'html' );

htmlDir.forEach( htmlFile => {
	console.log( '------------------------------------------------' );
	console.log( htmlFile );

	update( 'html/', htmlFile );

} )

function update( path, fileName ) {
	let text = fs.readFileSync( './' + path + fileName, { encoding: 'utf8' } );

	const src =
		// fileName === 'index.html'
		// ? text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => ( el.includes( 'js/' ) || el.includes( 'images' ) ) )
		// : text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => ( el.includes( '../js/' ) || el.includes( 'images' ) ) )
		text.match( /(?<=src=")(.+?)(?=")/g ).filter( el => !el.includes( 'cdn.jsdelivr' ) );

	const href =
		// fileName === 'index.html'
		// ? text.match( /(?<=href=")(.+?)(?=")/g ).filter( el => ( el.includes( 'css/' ) || el.includes( 'html' ) ) )
		// : text.match( /(?<=href=")(.+?)(?=")/g ).filter( el => ( el.includes( '../css/' ) || el.includes( 'html' ) ) )
		text.match( /(?<=href=")(.+?)(?=")/g ).filter( el => !el.includes( 'cdn.jsdelivr' ) );

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





setTimeout( () => {
	// const jsFiles = fs.readdirSync( './distr/js' );
	const jsFiles = getFilelistRecursively( "./distr/js" );
	console.log( jsFiles );

	jsFiles.forEach( jsFile => {
		console.log( '------------------------------------------------' );
		console.log( jsFile );

		if ( jsFile.slice( -2 ) !== 'js' ) return;

		// const text = fs.readFileSync( './distr/js/' + jsFile, { encoding: 'utf8' } );
		const text = fs.readFileSync( jsFile, { encoding: 'utf8' } );

		const uText = UglifyJS.minify( text );

		// fs.writeFileSync( './distr/js/' + jsFile, uText.code );
		fs.writeFileSync( jsFile, uText.code );

	} );


	// const cssFiles = fs.readdirSync( './distr/css' );
	// console.log( cssFiles );

	// cssFiles.forEach( async cssFile => {
	// 	console.log( '------------------------------------------------' );
	// 	console.log( cssFile );

	// 	if ( cssFile.slice( -3 ) !== 'css' ) return;

	// 	const text = fs.readFileSync( './distr/css/' + cssFile, { encoding: 'utf8' } );

	// 	postcss( [ autoprefixer ] ).process( text ).then( result => {
	// 		result.warnings().forEach( warn => {
	// 			console.warn( warn.toString() )
	// 		} )
	// 		// console.log( result.css )
	// 		// const uText = UglifyJS.minify( result.css )
	// 		const uText = new CleanCSS( cleanCSSoptions ).minify( result.css );
	// 		fs.writeFileSync( './distr/css/' + cssFile, uText.styles );
	// 	} )


	// } );

	setTimeout( () => {
		console.log( 'Очистка zadanija в dist chatbook2' );
		fse.emptyDirSync( 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija' );
		fse.emptyDirSync( 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija' );


		console.log( 'copy distr' );
		ncp( './distr', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\', function ( err ) {
			if ( err ) {
				return console.error( err );
			}
			console.log( 'done!' );
		} );
		ncp( './distr', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija\\', function ( err ) {
			if ( err ) {
				return console.error( err );
			}
			console.log( 'done!' );
		} );

		console.log( 'copy images' );
		ncp( './images', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\images', function ( err ) {
			if ( err ) {
				return console.error( err );
			}
			console.log( 'done!' );
		} );
		ncp( './images', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija\\images', function ( err ) {
			if ( err ) {
				return console.error( err );
			}
			console.log( 'done!' );
		} );

	}, 2000 );

}, 1000 );


