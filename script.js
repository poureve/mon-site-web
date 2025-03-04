// Fonction pour faire défiler la page vers la première section
function scrollToSection() {
    const firstSection = document.querySelector("#investir");
    if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("Le site est chargé !");
});
