// Feedback
document.addEventListener("DOMContentLoaded", () => {
  const ratingInputs = document.querySelectorAll(".rating input[type='radio']");
  const stars = document.querySelectorAll(".rating .star");
  const tagSection = document.querySelector(".rate-tag-section");
  const tagText = tagSection.querySelector("p");

  ratingInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
      const value = parseInt(input.value, 10); // 1–5

      // Подсветка звёзд
      stars.forEach((star, i) => {
        if (i >= stars.length - value) {
          star.classList.add("star-fill");
        } else {
          star.classList.remove("star-fill");
        }
      });

      // Показать блок с тегами
      tagSection.classList.remove("hide");

      // Текст в <p>
      switch (value) {
        case 1:
          tagText.textContent = "Что особенно расстроило?";
          break;
        case 5:
          tagText.textContent = "Что особенно понравилось?";
          break;
        default:
          tagText.textContent = "Что стоит улучшить?";
      }
    });
  });
});

// Booking
const adultBtn = document.querySelector('.adult-booking-p');
const kidsBtn = document.querySelector('.kids-booking-p');
const activeBg = document.querySelector('.toggle-active-bg');
const textfield = document.querySelector('.kid-name');

adultBtn.addEventListener('click', () => {
  activeBg.style.left = '0';
  adultBtn.classList.add('active-btn');
  kidsBtn.classList.remove('active-btn');
  textfield.classList.add('hide');
});

kidsBtn.addEventListener('click', () => {
  activeBg.style.left = '50%';
  kidsBtn.classList.add('active-btn');
  adultBtn.classList.remove('active-btn');
  textfield.classList.remove('hide');
});
