document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".profile img, .profile h1, .profile p, .experience-card, .skill-card");

  fadeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, index * 150);
  });
});
