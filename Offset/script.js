//selector
const div = document.getElementById('parallax');

//event listeners
window.addEventListener('scroll', para)

//function
function para() {

    let offset = window.pageYOffset;
    div.style.backgroundPositionY = offset * 0.4 + "px";
}