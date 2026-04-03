// Fade-in ao carregar
window.addEventListener("load", () => {
  document.body.style.opacity = 0;

  setTimeout(() => {
    document.body.style.transition = "1s";
    document.body.style.opacity = 1;
  }, 100);
});

// Animação dos cards ao scroll
const cards = document.querySelectorAll(".card");

function mostrarCards() {
  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 50) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", mostrarCards);

// Executa ao carregar também
mostrarCards();