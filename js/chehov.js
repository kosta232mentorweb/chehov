console.log( 'Проект Чехов' );

// const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas');

const offcanvasElementList = document.querySelectorAll( '.offcanvas' );
const offcanvasList = [ ...offcanvasElementList ].map( offcanvasEl => new bootstrap.Offcanvas( offcanvasEl ) );

console.log( offcanvasList );

setTimeout( () => {
   if ( !doNotShowForTeachers ) offcanvasList[ 1 ].show();
}, 500 )

const doNotShowForTeachersElement = document.querySelector( '#doNotShowForTeachers' );
let doNotShowForTeachers = Boolean(Number(localStorage.getItem( 'doNotShowForTeachers' )));
console.log(doNotShowForTeachers);
doNotShowForTeachersElement.checked = doNotShowForTeachers;

doNotShowForTeachersElement.addEventListener( 'input', event => {
   console.log( event.target.checked );
   doNotShowForTeachers = event.target.checked;
   localStorage.setItem( 'doNotShowForTeachers', Number(doNotShowForTeachers) )
} )