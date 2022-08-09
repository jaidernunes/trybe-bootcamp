const submitButton = document.getElementById('submit');
function submitStop(event) {
    event.preventDefault();
}
submitButton.addEventListener('click', submitStop)
