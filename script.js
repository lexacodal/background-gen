// let css = document.querySelector('h3');
// let color1 = document.querySelector('.color1');
// let color2 = document.querySelector('.color2');
// let body = document.getElementById('gradient');
// //  //body.style.background = 'burlywood';
// // let body = document.getElementById('gradient');




// console.log(css);
// console.log(color1);
// console.log(color2);

//There's an input event for input changes
 
// color1.addEventListener('input', function() {
//     console.log(color1.value);
// })

// color2.addEventListener('input', function() {
//     console.log(color2.value);
// })

//So, we want to change the background anytime we select a color from the color picker(s). The background in the DOM is ideally part of the Body tag. So, naturally, that's what we are going to select(The body tag)

//  function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
// }
  
// color1.addEventListener('input', setGradient())

// color2.addEventListener('input', setGradient())

// function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);


//We can as well add CSS written at the bottom
// function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
//     css.textContent = body.style.background + ';';  
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);


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


// function randomCol(){
//     color1.value = "#" + (Math.floor(math.random()* (0*100000))).toString(16); 
//     color2.value = "#" + (Math.floor(math.random ()* (0*1000000))).toString(16);    
//     body.style.background = 'linear-gradient(to right' +color1.value+ ',' + color2.value+ ')';
//     css.textContent = body.style.background + ';'
// }

// button.addEventListener('click', randomCol);
