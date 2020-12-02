import "normalize.css";
import "aos/dist/aos.css";
import "./main.scss";

import "@fortawesome/fontawesome-free/js/all";
import AOS from "aos";

AOS.init({
    duration: 1000,
    once: true,
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


// Simluate Clicking to pause youtube video
function click(el, etype){
    if (el.fireEvent) {
        el.fireEvent('on' + etype);
    } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
    }
}

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