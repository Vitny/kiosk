// Navigate 
// убрано из раздела, неактулаьно
// document.addEventListener("DOMContentLoaded", () => {
//   const adultBtnnav = document.querySelector(".adult-nav");
//   const kidsBtnnav = document.querySelector(".kids-nav");
//   const opticsBtn = document.querySelector(".optics-nav");

//   const activeBgnav = document.querySelector(".toggle-active-bg-nav");

//   const adultContent = document.querySelector(".adult-nav-content");
//   const kidsContent = document.querySelector(".kids-nav-content");
//   const opticsContent = document.querySelector(".optics-nav-content");

//   function activateTab(tab) {
//     adultBtnnav.classList.remove("active-btn");
//     kidsBtnnav.classList.remove("active-btn");
//     opticsBtn.classList.remove("active-btn");

//     adultContent.classList.add("hide");
//     kidsContent.classList.add("hide");
//     opticsContent.classList.add("hide");

//     if (tab === "adult") {
//       adultBtnnav.classList.add("active-btn");
//       activeBgnav.style.left = "0%";
//       adultContent.classList.remove("hide");
//     } else if (tab === "kids") {
//       kidsBtnnav.classList.add("active-btn");
//       activeBgnav.style.left = "33.333%";
//       kidsContent.classList.remove("hide");
//     } else if (tab === "optics") {
//       opticsBtn.classList.add("active-btn");
//       activeBgnav.style.left = "66.666%";
//       opticsContent.classList.remove("hide");
//     }
//   }

//   adultBtnnav.addEventListener("click", () => activateTab("adult"));
//   kidsBtnnav.addEventListener("click", () => activateTab("kids"));
//   opticsBtn.addEventListener("click", () => activateTab("optics"));
// });
