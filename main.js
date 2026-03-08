AOS.init();

// Navbar toggle for mobile
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

// Typing animation
const words = ["Full stack Dev..", "Web Designer", "JavaScript Dev..","React writer","Express","ETC"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
function type(){
  currentWord = words[i];
  if(isDeleting){ j--; } else { j++; }
  document.querySelector(".typing").textContent = currentWord.substring(0,j);
  if(!isDeleting && j === currentWord.length){ isDeleting = true; setTimeout(type,1500); return; }
  if(isDeleting && j === 0){ isDeleting = false; i=(i+1)%words.length; }
  setTimeout(type,isDeleting ? 50 : 100);
}
type();

// Scroll progress bar
window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector(".scroll-bar").style.width = scrolled + "%";
};

// Back-to-top button
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});
topBtn.onclick = () => window.scrollTo({top:0, behavior:"smooth"});

// Active navbar link highlight
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll",()=>{
  let current = "";
  sections.forEach(section=>{
    if(scrollY >= section.offsetTop - 200){ current = section.getAttribute("id"); }
  });
  navItems.forEach(a=>{
    a.classList.remove("active");
    if(a.getAttribute("href") === "#" + current){ a.classList.add("active"); }
  });
});