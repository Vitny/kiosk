document.addEventListener("DOMContentLoaded", () => {
  const adultBtn = document.querySelector(".adult-booking-p");
  const kidsBtn = document.querySelector(".kids-booking-p");
  const activeBg = document.querySelector(".toggle-active-bg");
  const textfield = document.querySelector(".kid-name");

  adultBtn.addEventListener("click", () => {
    activeBg.style.left = "0";
    adultBtn.classList.add("active-btn");
    kidsBtn.classList.remove("active-btn");
    activeBg.classList.remove("kids");
    textfield.classList.add("hide");
  });

  kidsBtn.addEventListener("click", () => {
    activeBg.style.left = "50%";
    kidsBtn.classList.add("active-btn");
    activeBg.classList.add("kids");
    adultBtn.classList.remove("active-btn");
    textfield.classList.remove("hide");
  });
});
