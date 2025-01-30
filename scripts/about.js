// Typing effect for the "About Me" text
const text = "Hello! I'm a U/UX Designer with over 4+ years of work experience & Content Creator with a vibrant 100k+ community. Specializing in creating user-centric solutions for digital products that span across financial services, e-commerce, and ed-technology.";
let index = 0;

function type() {
    document.getElementById("typing-text").textContent = text.slice(0, index);
    index++;
    if (index > text.length) index = 0;
    setTimeout(type, 100);
}

type();

// Rotating profile photo
gsap.to("#profile-photo", {
    rotation: 360,
    duration: 5,
    repeat: -1,
    ease: "none",
});