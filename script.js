document.addEventListener("DOMContentLoaded", function(){

/* ================= TYPING HOME ONLY ================= */
const typingText = document.querySelector(".typing-text");
const text = "Lukman Al Khakim";
let index = 0;

function type(){
    if(index < text.length){
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(type,80);
    }
}
type();

/* ================= REVEAL ANIMATION ================= */
function reveal(){
    const elements = document.querySelectorAll(".reveal-up");

    elements.forEach(el=>{
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 120){
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

/* ================= THEME TOGGLE ================= */
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", ()=>{
    document.body.classList.toggle("light");
});

});
