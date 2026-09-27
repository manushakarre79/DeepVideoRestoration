document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
    ========================= */

    const menuButton = document.getElementById("menuButton");
    const navLinks = document.getElementById("navLinks");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }


    /* =========================
       FEATURE MODAL
    ========================= */

    const featureCards = document.querySelectorAll(".feature-card");
    const featureModal = document.getElementById("featureModal");
    const modalOverlay = document.getElementById("modalOverlay");
    const modalClose = document.getElementById("modalClose");

    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    const modalAction = document.getElementById("modalAction");


    function openFeatureModal(card) {

        const title = card.getAttribute("data-title");
        const description = card.getAttribute("data-description");

        if (modalTitle) {
            modalTitle.textContent = title;
        }

        if (modalDescription) {
            modalDescription.textContent = description;
        }

        if (featureModal) {
            featureModal.classList.add("active");
            document.body.style.overflow = "hidden";
        }
    }


    function closeFeatureModal() {

        if (featureModal) {
            featureModal.classList.remove("active");
            document.body.style.overflow = "";
        }
    }


    /* Click feature card */

    featureCards.forEach(function (card) {

        card.addEventListener("click", function (event) {

            /*
             * Prevent the button click from
             * creating another event.
             */

            openFeatureModal(card);

        });

    });


    /* Close button */

    if (modalClose) {
        modalClose.addEventListener("click", function () {
            closeFeatureModal();
        });
    }


    /* Click outside popup */

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function () {
            closeFeatureModal();
        });
    }


    /* Got it button */

    if (modalAction) {
        modalAction.addEventListener("click", function () {
            closeFeatureModal();
        });
    }


    /* ESC key */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeFeatureModal();
        }

    });


    /* =========================
       SMOOTH SCROLL
    ========================= */

    const navAnchors = document.querySelectorAll(
        'a[href^="#"]'
    );

    navAnchors.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    if (navLinks) {
                        navLinks.classList.remove("active");
                    }
                }
            }

        });

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(".reveal");

    function revealOnScroll() {

        const windowHeight = window.innerHeight;

        revealElements.forEach(function (element) {

            const elementTop =
                element.getBoundingClientRect().top;

            if (elementTop < windowHeight - 80) {
                element.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", revealOnScroll);

    revealOnScroll();


    /* =========================
       ACTIVE NAVIGATION
    ========================= */

    const sections = document.querySelectorAll(
        "section[id]"
    );

    const navItems = document.querySelectorAll(
        ".nav-link"
    );

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop =
                section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }

        });


        navItems.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);

    updateActiveNav();


    /* =========================
       BUTTON RIPPLE EFFECT
    ========================= */

    const buttons = document.querySelectorAll(
        ".primary-button, .secondary-button, .feature-button, .modal-button"
    );

    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple = document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            ripple.style.left =
                (event.clientX - rect.left) + "px";

            ripple.style.top =
                (event.clientY - rect.top) + "px";

            button.appendChild(ripple);

            setTimeout(function () {
                ripple.remove();
            }, 600);

        });

    });


    /* =========================
       AI PROGRESS ANIMATION
    ========================= */

    const progressBar =
        document.querySelector(".video-progress .progress-bar div");

    if (progressBar) {

        let progress = 70;

        setInterval(function () {

            progress += 1;

            if (progress > 100) {
                progress = 70;
            }

            progressBar.style.width = progress + "%";

        }, 120);
    }


    /* =========================
       FEATURE CARD HOVER EFFECT
    ========================= */

    featureCards.forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const rect = card.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -3;

            const rotateY =
                ((x - centerX) / centerX) * 3;

            card.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;
        });


        card.addEventListener("mouseleave", function () {

            card.style.transform = "";

        });

    });

});