// Version définitive
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
  mouses.forEach((mouse) => {
    mouse.style.top = e.pageY + "px";
    mouse.style.left = e.pageX + "px";
  });
});

// Version du corrigé
// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.pageY + "px";
//   cursor.style.left = e.pageX + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mouse1.style.top = e.pageY + "px";
//   mouse1.style.left = e.pageX + "px";
// });

// window.addEventListener("mousemove", (e) => {
//   mouse2.style.top = e.pageY + "px";
//   mouse2.style.left = e.pageX + "px";
// });

// -----------------------------------------------------------------

//Première version by Thoams
// const circle1 = document.querySelector(".circle1");
// window.addEventListener("mousemove", (e) => {
//   circle1.style.left = e.pageX + "px";
//   circle1.style.top = e.pageY + "px";
// });
// const circle2 = document.querySelector(".circle2");
// window.addEventListener("mousemove", (e) => {
//   circle2.style.left = e.pageX + "px";
//   circle2.style.top = e.pageY + "px";
// });
// const circle3 = document.querySelector(".circle3");
// window.addEventListener("mousemove", (e) => {
//   circle3.style.left = e.pageX + "px";
//   circle3.style.top = e.pageY + "px";
// });

// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
