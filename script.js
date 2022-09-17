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

//The setGradient function can as well be called in the html input element using the oninput attribute. That works fine too
//<input oninput="setGradient()" type="color"> The only reason one doesn't do that often is cos of separation of concerns

//We can as well add CSS written at the bottom
// function setGradient() {
//     body.style.background = 'linear-gradient(to right, ' + color1.value +', ' + color2.value + ')'; 
//     css.textContent = body.style.background + ';';  
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);
// The dom and dom manipulation can be frustrating and overwhelming to say the least
// The dom has a lot of methods, but one needs to constantly check to see if it's compatible with the browsers to work. That's why we use websites like caniuse.com to constantly check for compatibility.
//Prior to now(a few years ago), a lot of web browsers do not support these methods(querySelector, getElementById, etc).

//A library was created then that solved this huge problem of compatibility: JQUERY. It was introduced in 2006.

//It is a javaScript file written by few a people that added a little bit more to the language, so you can do more things. It has more properties and functions. Its main goal was to make DOM manipulation easier, faster and compatible with all browsers. So developers have taken care of hardwork and browsers compatibilty issues.

//We can check w3schools JQuery example and explanation. you'll see a script tag with a CDN pointed at jQuery minified javaScript

//jQuery is that code snippet that always start with the dollar($) sign
// $(document).ready(function(){
//    * run anything here 
// })

//IT does same things we do with event listeners

//The only issue with JQuery is that it makes code very imperative(This means you have to tell the program exactly what to do one by one). This may not seem like a bad idea until your website gets big and complicated and this(jQuery) creates a huge mess(one action is dependent on another action which dependent on another action and it goes on like that). You easily looks track of what's happening(more bugs and errors in your code base) and a mess is created. You don,t ever want to get caught up in the pyramid of doom

//Now that most browsers supports most selectors, it's simpler and less coplicated to use them
//There are even websites that shows you what your regular JS code can be in comparison to jQuery
//youmightnotneedjquery.com

//jQuery is still used today but fewer people are still using and most employers are not even looking for Jquery developers to start with. There's a negative view of developers who only know jQuery 😂. In 2022, it's not that useful of a skill. that's why it's important to grow and be dynamic with evolving changes 

//Employers go with more mordern libraries like react
//React solve that huge problem that comes with jQuery in that it is Declarative, rather than being imperative

//!(DOM Manipulation) 🤦🏼‍♂️

//It is very important to minimize the number of DOM manipulations and events when building web apps and also be smart by using the best methods to minimize this

//React was built for that exact purpose too 😁


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