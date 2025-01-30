// Pulsating effect for the contact button
gsap.to("#contact-button", {
    scale: 1.1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut",
});

// Fade-in animation for the contact section
gsap.from("#contact", { opacity: 0, y: 50, duration: 1, delay: 0.5 });