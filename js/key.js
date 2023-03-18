const BookAASKeyElement = document.querySelector('#BookAASKey');

let BookAASKey = localStorage.getItem('BookAASKey') ?? '';
BookAASKeyElement.value = BookAASKey;

BookAASKeyElement.addEventListener('input', (event) => {
	BookAASKey = event.target.value;
	localStorage.setItem('BookAASKey', BookAASKey);
});
