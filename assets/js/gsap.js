// animateIn
let animateInElements = document.querySelectorAll(".animateIn");

animateInElements.forEach((el, index) => {
    let delayTime = 0; // Default delay time

    // Check for delay class using regex
    el.classList.forEach(className => {
        let match = className.match(/^delay-(\d+)$/);
        if (match) {
            delayTime = parseInt(match[1]) / 10; // Convert to seconds
        }
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            markers: false,
            toggleActions: "play none none reverse"
        }
    });

    tl.from(el, {
        y: 25,
        opacity: 0,
        duration: 1.25,
        ease: "elastic.out(1, 0.75)", // Use elastic ease for bounce effect
        delay: delayTime
    });
});



// Parallex effect images
gsap.utils.toArray(".image-container").forEach(function (container) {
    let image = container.querySelector("img");

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
        },
    });

    tl.from(image, {
        yPercent: -30,
        ease: "none",
    }).to(image, {
        yPercent: 30,
        ease: "none",
    });
});


// floating footer
gsap.from(".floatBar", {
    y: 100, // Move up from 100px below
    opacity: 0, // Start with invisible
    duration: 1, // Duration of the animation
    ease: "power2.out", // Easing for smoothness
    scrollTrigger: {
        markers: false,
        trigger: ".floatBar",
        start: "top center", // When the footer is just entering the viewport
        toggleActions: "play none none reverse", // Play animation when entering, reverse when leaving
    }
});


// zoom in text | only in desktop
if (window.matchMedia("(min-width: 768px)").matches) {
    gsap.to(".introTxt", {
        fontSize: "2.2rem",
        scrollTrigger: {
            trigger: ".introTxt",
            start: "top 80%",    // Starts when the top of introTxt reaches 80% of viewport height
            end: "top 20%",      // Ends when the top of introTxt reaches 20% of viewport height
            scrub: true,         // Smooth animation in sync with scroll
            markers: false        // For debugging, can be removed once satisfied
        },
        duration: 1.5,
        ease: "none"
    });
}



// zoomImage on scroll
if (window.matchMedia("(min-width: 768px)").matches) {
    const images = document.querySelectorAll(".zoomImage");
    images.forEach((img) => {
        gsap.fromTo(img,
            { scale: 0.8, opacity: 0 }, // Initial state: smaller and invisible
            {
                scale: 1, // Final state: normal size
                opacity: 1, // Fully visible
                scrollTrigger: {
                    trigger: img,
                    start: "top 80%", // Animation starts when the top of the image reaches 80% of the viewport
                    end: "top 60%", // Animation ends when the top of the image reaches 30% of the viewport
                    scrub: true, // Smoothly sync the animation with the scroll
                    markers: false // For debugging; can be removed once satisfied
                },
                duration: 1 // Duration of the animation
            }
        );
    });
}