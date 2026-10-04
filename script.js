// ===============================
// Smooth Scrolling for Navigation
// ===============================

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// ===============================
// Typing Animation
// ===============================

const titles = [
    "AI & Data Science Student",
    "Machine Learning Enthusiast",
    "Python Developer",
    "Future Data Scientist"
];

let titleIndex = 0;
let charIndex = 0;
let typing = true;

const typingElement = document.querySelector(".left h3");

function typeEffect() {

    if (!typingElement) return;

    if (typing) {

        typingElement.textContent =
            titles[titleIndex].substring(0, charIndex++);

        if (charIndex > titles[titleIndex].length) {

            typing = false;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typingElement.textContent =
            titles[titleIndex].substring(0, charIndex--);

        if (charIndex < 0) {

            typing = true;

            titleIndex++;

            if (titleIndex >= titles.length)
                titleIndex = 0;

        }

    }

    setTimeout(typeEffect, 100);

}

typeEffect();


// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll("section");

window.addEventListener("scroll", reveal);

function reveal() {

    let windowHeight = window.innerHeight;

    revealElements.forEach(section => {

        let top = section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";
            section.style.transition = "1s";

        }

    });

}


// Initial Style

revealElements.forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

});

reveal();


// ===============================
// Back To Top Button
// ===============================

const btn = document.createElement("button");

btn.innerHTML = "↑";

btn.style.position = "fixed";
btn.style.right = "20px";
btn.style.bottom = "20px";
btn.style.padding = "12px 16px";
btn.style.borderRadius = "50%";
btn.style.border = "none";
btn.style.fontSize = "20px";
btn.style.cursor = "pointer";
btn.style.display = "none";
btn.style.zIndex = "999";
btn.style.background = "#38bdf8";
btn.style.color = "white";

document.body.appendChild(btn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        btn.style.display = "block";

    } else {

        btn.style.display = "none";

    }

});

btn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        alert("Thank you! Your message has been received.");

        form.reset();

    });

}


// ===============================
// Welcome Message
// ===============================

window.onload = () => {

    console.log("Portfolio Loaded Successfully 🚀");

};


const galleryImages = document.querySelectorAll(".gallery-container img");

galleryImages.forEach((img) => {

    img.addEventListener("click", () => {

        window.open(img.src);

    });

});
