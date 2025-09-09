// Menu burger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Animation compétences
window.addEventListener('scroll', () => {
  const skills = document.querySelectorAll('.skill-progress');
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (skillTop < windowHeight - 50) {
      skill.style.width = skill.getAttribute('data-progress');
    }
  });
});

// Bouton retour en haut
const topBtn = document.getElementById("topBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}




const form = document.getElementById("contact-form");
const successMsg = document.querySelector(".success-message");
const errorMsg = document.querySelector(".error-message");

form.addEventListener("submit", async function(e) {
  e.preventDefault(); // empêche le rechargement

  // Récupère les données du formulaire
  const formData = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/xvgbddrd", {
      method: "POST",
      body: formData,
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      // Message succès
      successMsg.style.display = "block";
      errorMsg.style.display = "none";
      form.reset(); // vide le formulaire
    } else {
      // Message erreur
      successMsg.style.display = "none";
      errorMsg.style.display = "block";
    }

  } catch (err) {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
    console.error("Erreur lors de l'envoi :", err);
  }
});

