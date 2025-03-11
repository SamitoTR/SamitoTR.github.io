document.addEventListener("DOMContentLoaded", () => {
    // Efecto de aparición en el título y el párrafo
    const fadeElements = document.querySelectorAll(".fade-in");
    
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 500 * (index + 1));
    });
});
