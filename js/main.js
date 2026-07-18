/* ==========================================================
   HK Hospital Website
   main.js
========================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================================
       PRELOADER
    ========================================== */

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", () => {
        setTimeout(() => {
            preloader.style.opacity = "0";
            preloader.style.visibility = "hidden";
        }, 500);
    });

    /* ==========================================
       STICKY NAVBAR
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });

    /* ==========================================
       SCROLL PROGRESS BAR
    ========================================== */

    const progressBar = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

        let scrollTop = window.scrollY;

        let docHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        let percentage = (scrollTop / docHeight) * 100;

        progressBar.style.width = percentage + "%";

    });

    /* ==========================================
       SCROLL TO TOP
    ========================================== */

    const scrollBtn = document.getElementById("scrollTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            scrollBtn.style.display = "block";

        } else {

            scrollBtn.style.display = "none";

        }

    });

    scrollBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================================
       COUNTER ANIMATION
    ========================================== */

    const counters = document.querySelectorAll(".highlight-box h2");

    const animateCounter = (counter) => {

        const targetText = counter.innerText;

        const target = parseInt(targetText.replace(/\D/g, ""));

        let count = 0;

        const speed = target / 80;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.floor(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = targetText;

            }

        };

        update();

    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    });

    counters.forEach(counter => {

        observer.observe(counter);

    });

    /* ==========================================
       SMOOTH SCROLL
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({

                    behavior: "smooth"

                });

        });

    });

    /* ==========================================
       HERO VIDEO PLAYBACK SPEED
    ========================================== */

    const heroVideo = document.querySelector(".hero-video");

    if (heroVideo) {

        heroVideo.playbackRate = 0.7;

    }

});
