/* =========================================================
   DEEPRESTORE
   WEBSITE INTERACTIONS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        if (navLinks.classList.contains("open")) {
            menuButton.textContent = "×";
        } else {
            menuButton.textContent = "☰";
        }

    });


    // Close mobile menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuButton.textContent = "☰";

        });

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 180) {
            currentSection = section.getAttribute("id");
        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   FEATURE MODAL
========================================================= */

const featureCards =
    document.querySelectorAll(".feature-card");

const featureModal =
    document.getElementById("featureModal");

const modalOverlay =
    document.getElementById("modalOverlay");

const modalClose =
    document.getElementById("modalClose");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalAction =
    document.getElementById("modalAction");


function openFeatureModal(card) {

    const title =
        card.getAttribute("data-title");

    const description =
        card.getAttribute("data-description");


    modalTitle.textContent = title;

    modalDescription.textContent =
        description;


    featureModal.classList.add("show");

    document.body.style.overflow = "hidden";

}


function closeFeatureModal() {

    featureModal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Open modal */

featureCards.forEach(card => {

    card.addEventListener("click", () => {

        openFeatureModal(card);

    });

});


/* Close modal */

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeFeatureModal
    );

}


if (modalOverlay) {

    modalOverlay.addEventListener(
        "click",
        closeFeatureModal
    );

}


/* Close with ESC */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        featureModal.classList.contains("show")
    ) {

        closeFeatureModal();

    }

});


/* =========================================================
   BUTTON RIPPLE EFFECT
========================================================= */

const buttons =
    document.querySelectorAll(
        ".primary-button, .secondary-button, .nav-register"
    );


buttons.forEach(button => {

    button.addEventListener("click", function(event) {

        const ripple =
            document.createElement("span");

        ripple.style.position = "absolute";
        ripple.style.borderRadius = "50%";
        ripple.style.background =
            "rgba(255,255,255,0.25)";
        ripple.style.width = "10px";
        ripple.style.height = "10px";
        ripple.style.transform = "scale(0)";
        ripple.style.pointerEvents = "none";

        const rect =
            this.getBoundingClientRect();

        ripple.style.left =
            event.clientX - rect.left + "px";

        ripple.style.top =
            event.clientY - rect.top + "px";


        this.style.position = "relative";
        this.style.overflow = "hidden";

        this.appendChild(ripple);


        ripple.animate(
            [
                {
                    transform: "scale(0)",
                    opacity: 0.8
                },

                {
                    transform: "scale(20)",
                    opacity: 0
                }
            ],

            {
                duration: 600,
                easing: "ease-out"
            }
        );


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================================
   MOUSE PARALLAX EFFECT
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


if (heroVisual && window.innerWidth > 900) {

    document.addEventListener("mousemove", event => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        heroVisual.style.transform =
            `translateY(-45%)
             translate(${x * 12}px, ${y * 12}px)`;

    });

}


/* =========================================================
   FEATURE CARD TILT EFFECT
========================================================= */

const cards =
    document.querySelectorAll(".feature-card");


cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        if (window.innerWidth < 900) {
            return;
        }


        const rect =
            card.getBoundingClientRect();


        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;


        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;


        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;


        card.style.transform =
            `translateY(-12px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const target =
            document.querySelector(
                this.getAttribute("href")
            );


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   HERO CARD PROGRESS ANIMATION
========================================================= */

const progress =
    document.querySelector(".progress-bar div");


if (progress) {

    let progressValue = 70;


    setInterval(() => {

        progressValue +=
            Math.random() * 2;


        if (progressValue > 96) {
            progressValue = 88;
        }


        progress.style.width =
            progressValue + "%";

    }, 1800);

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});