import "normalize.css";
import "aos/dist/aos.css";
import "./main.scss";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/regular";

import AOS from "aos";

AOS.init({
    duration: 1000,
    once: true,
    mirror: false
});

import VanillaTilt from "vanilla-tilt";
const cards = document.querySelectorAll("card");
VanillaTilt.init(cards, {
    glare: true,
    scale: 1.1
});

// Splashscreen animations
setTimeout(function() {
    document.querySelector(".splash").className = "splash hide";
    setTimeout(function() {
        document.querySelector(".splash").remove();
    }, 1000);
}, 2000);

// Modals

let boxes = ["slides", "ad"];
for (const id of boxes) {
    const closeSlides = document.querySelector("#close-" + id);
    if (closeSlides) closeSlides.addEventListener("click", function() {
        document.querySelector("#" + id).className = "modal hide";
        setTimeout(function() {
            document.querySelector(".video").src += '';
        }, 500);
    });
    
    const showSlides = document.querySelector("#show-" + id);
    if (showSlides) showSlides.addEventListener("click", function() {
        document.querySelector("#" + id).className = "modal";
    });
}

console.log("🦄 Hello, World!");