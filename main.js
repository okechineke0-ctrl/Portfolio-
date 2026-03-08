// mobile menu

const menuToggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")

menuToggle.addEventListener("click", () => {
navLinks.classList.toggle("active")
})


// typing animation

const text = ["Full stack Dev...","Web Designer","JavaScript Dev..."]

let count = 0
let index = 0
let currentText = ""
let letter = ""

function type(){

if(count === text.length){
count = 0
}

currentText = text[count]
letter = currentText.slice(0,++index)

document.querySelector(".typing").textContent = letter

if(letter.length === currentText.length){
count++
index = 0
}

setTimeout(type,120)

}

type()


// scroll animation

function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top
let elementVisible = 150

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)