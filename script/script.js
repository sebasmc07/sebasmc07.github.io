document.addEventListener("DOMContentLoaded", () => {
  // Contador de visitas
  let visitCount = localStorage.getItem("visitCount") || 0;
  visitCount = parseInt(visitCount) + 1;
  localStorage.setItem("visitCount", visitCount);
  document.getElementById("visit-count").textContent = visitCount;

  // Animación de secciones
  const sections = document.querySelectorAll("section");
  sections.forEach((section, index) => {
    section.style.animationDelay = `${index * 0.3}s`;
  });
});
