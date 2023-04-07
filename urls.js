const fs = require( 'fs' );
const fse = require( 'fs-extra' );

const UglifyJS = require( "uglify-js" );


const autoprefixer = require( 'autoprefixer' );
const postcss = require( 'postcss' );

var CleanCSS = require( 'clean-css' );
const { log } = require( 'console' );
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
fse.emptyDirSync( './distr_fest' );
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
update( '', 'index-fest.html' );

const cssDir = fs.readdirSync( 'css' );
const jsDir = fs.readdirSync( 'js' );

// console.log( cssDir );
// console.log( jsDir );


console.log( './css', './distr/css' );
fse.copySync( './css', './distr/css' );
console.log( 'done!' );

console.log( './js', './distr/js' );
fse.copySync( './js', './distr/js' );
console.log( 'done!' );





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


console.log( 'Очистка zadanija в dist chatbook2' );
fse.emptyDirSync( 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija' );
fse.emptyDirSync( 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija' );


console.log( 'copy distr' );
fse.copySync( './distr', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\' );
fse.copySync( './distr', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija\\' );
console.log( 'copy distr done' );

console.log( 'copy images' );
fse.copySync( './images', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\dist\\zadanija\\images' );
fse.copySync( './images', 'c:\\Users\\Kanstantsin\\Projects\\chatbook2\\public\\zadanija\\images' );
console.log( 'copy images done' );

console.log( 'copy to fest' );
fse.copySync( './distr', './distr_fest' );
console.log( 'copy to fest done' );

console.log( 'copy images to fest' );
fse.copySync( './images', './distr_fest/images' );
console.log( 'copy images to fest done' );

fse.rmSync( './distr_fest/index.html' );
fse.renameSync( './distr_fest/index-fest.html', './distr_fest/index.html' )

