//selectors

let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let mountains_front = document.getElementById('mountains_front');
let moonLight = document.getElementById('text');
let explore = document.getElementById('btn');
let header = document.querySelector('head-scroll');


//functions 
function parallax() {
let value = window.scrollY;
stars.style.left = value * 0.25 + 'px';
moon.style.top = value * 1.05 + 'px';
mountains_behind.style.top = value * 0.7 + 'px';
mountains_front.style.top = value * 0 + 'px';
moonLight.style.marginRight = value * 4 + 'px';
moonLight.style.marginTop = value * 1.5 + 'px';
explore.style.marginTop = value * 1.5 + 'px';
header.style.bottom = value * 0.7 + 'px';
}



// event listeners
window.addEventListener('scroll',parallax);