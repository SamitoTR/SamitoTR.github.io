document.addEventListener("DOMContentLoaded", () => {
    // Efecto de aparición en el título y el párrafo en la página de contacto
    const fadeElements = document.querySelectorAll(".fade-in");
    
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 500 * (index + 1));
    });

    // Validación del formulario
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            e.preventDefault(); // Evita el envío del formulario
            alert("Por favor, completa todos los campos.");
        }
    });
});
