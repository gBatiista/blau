let btnSubmit = document.querySelector('#btn-submit');
btnSubmit.addEventListener('click', prevent);

function prevent(event) {
    event.preventDefault();
}