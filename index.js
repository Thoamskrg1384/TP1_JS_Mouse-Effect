// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
const circle1 = document.querySelector(".circle1");
window.addEventListener("mousemove", (e) => {
  circle1.style.left = e.pageX + "px";
  circle1.style.top = e.pageY + "px";
});
const circle2 = document.querySelector(".circle2");
window.addEventListener("mousemove", (e) => {
  circle2.style.left = e.pageX + "px";
  circle2.style.top = e.pageY + "px";
});
const circle3 = document.querySelector(".circle3");
window.addEventListener("mousemove", (e) => {
  circle3.style.left = e.pageX + "px";
  circle3.style.top = e.pageY + "px";
});
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
