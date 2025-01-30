// Scroll-triggered animations for projects
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