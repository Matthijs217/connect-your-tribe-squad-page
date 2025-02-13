document.addEventListener('DOMContentLoaded', function () {
    let sortBox = document.querySelector('.sort-box');
    sortBox.addEventListener('change', function () {
        console.log(this.value);
    });
});
