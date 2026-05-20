
document.addEventListener("DOMContentLoaded", () => {

  // Fade-in on load (hero)
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";

    setTimeout(() => {
      hero.style.transition = "0.8s ease";
      hero.style.opacity = 1;
      hero.style.transform = "translateY(0)";
    }, 100);
  }

  // Scroll reveal cards
  const cards = document.querySelectorAll(".card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
    card.style.transition = "0.6s ease";
    observer.observe(card);
  });

});