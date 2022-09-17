let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.getElementById('gradient');
let button = document.getElementById('random');
function setGradient(){
    body.style.background = 'linear-gradient(to right,' + color1.value+ ',' + color2.value+ ')';
    css.textContent = body.style.background + ';'; 
}
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
function randomCol(){
    color1.value = '#FFFFFF';
    color2.value = '#FFFF00';
    body.style.background = 'linear-gradient(to right' +color1.value+ ',' + color2.value+ ')';
    css.textContent = body.style.background + ';'; 
}
button.addEventListener('click',randomCol);
