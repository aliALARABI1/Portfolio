// Mobile Menu

const menuBtn=document.querySelector(".menu-btn");
const navLinks=document.querySelector(".nav-links");

menuBtn.onclick=()=>{
navLinks.classList.toggle("active");
};



// Scroll Animation

function reveal(){

const reveals=document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

let windowHeight=window.innerHeight;
let elementTop=reveals[i].getBoundingClientRect().top;

if(elementTop<windowHeight-100){

reveals[i].classList.add("active");

}

}

}

window.addEventListener("scroll",reveal);



// Contact Form

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Message Sent Successfully!");

});