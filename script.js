// GSAP Animations
gsap.from("header", { opacity: 0, y: -50, duration: 1 });
gsap.from("#hero h2", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from("#hero p", { opacity: 0, y: 50, duration: 1, delay: 1 });

// Scroll Animations
gsap.utils.toArray(".project").forEach((project, index) => {
    gsap.from(project, {
        scrollTrigger: {
            trigger: project,
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.2,
    });
});