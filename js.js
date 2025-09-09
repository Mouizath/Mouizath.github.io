// Filtre par catégorie
const filterBtns = document.querySelectorAll(".project-filters button");
const projectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.getAttribute("data-filter");

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lbImg = document.querySelector("#lightbox img");
const lbTitle = document.getElementById("lightbox-title");
const lbDesc = document.getElementById("lightbox-desc");
const lbClose = document.querySelector(".lightbox .close");

projectCards.forEach(card => {
  card.querySelector(".view-project").addEventListener("click", () => {
    lbImg.src = card.querySelector("img").src;
    lbTitle.textContent = card.querySelector(".overlay h3").textContent;
    lbDesc.textContent = card.querySelector(".overlay p").textContent;
    lightbox.style.display = "flex";
  });
});

lbClose.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) lightbox.style.display = "none";
});
