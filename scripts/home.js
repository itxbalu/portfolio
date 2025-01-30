// Fade-in animation for the hero section
gsap.from("#hero h2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });

// Floating effect for the hero text
gsap.to("#hero h2", {
    y: -10,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut",
});