// Typing animation
const text = ["Web Developer","Full stack Dev..","Programmer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

function type(){
    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typingElement = document.querySelector(".typing");
    if(typingElement){
        typingElement.textContent = letter;
    }

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type,120);
}

type();


// Initialize AOS animations
AOS.init({
    duration:1000,
    once:true
});


// Theme toggle
const toggle = document.getElementById("themeToggle");

if(toggle){
    toggle.onclick = () => {

        document.body.classList.toggle("light");

        if(document.body.classList.contains("light")){
            toggle.textContent = "🌞";
        } else {
            toggle.textContent = "🌙";
        }

    }
}


// Mobile navbar toggle
function toggleMenu(){

    const nav = document.getElementById("navLinks");

    if(nav){
        nav.classList.toggle("active");
    }

}


// Particles background
particlesJS.load(
    'particles-js',
    'https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/particles.json'
);
