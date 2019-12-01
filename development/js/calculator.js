document.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOM');

    const dropdown = document.querySelector('.dropdown-visible');
    const dropdownButton = document.querySelector('.package-arrow-down');

    dropdownButton.addEventListener('click', function () {

        dropdownButton.classList.toggle('package-arrow-up');
        e.preventDefault();
        dropdown.classList.toggle('dropdown-hidden');

    })






});