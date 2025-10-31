document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const header = question.querySelector(".question-header");
    const answer = question.querySelector(".faq-answer");
    const plusIcon = header.querySelector('img[src*="plus"]');
    const minusIcon = header.querySelector('img[src*="minus"]');

    // изначально всё скрыто
    answer.style.maxHeight = "0";

    header.addEventListener("click", () => {
      const isOpen = !answer.classList.contains("hide");

      // закрываем все остальные
      questions.forEach((q) => {
        const otherAnswer = q.querySelector(".faq-answer");
        const otherPlus = q.querySelector('img[src*="plus"]');
        const otherMinus = q.querySelector('img[src*="minus"]');
        if (!otherAnswer.classList.contains("hide")) {
          otherAnswer.style.maxHeight = "0";
          otherAnswer.classList.add("hide");
          otherPlus.classList.remove("hide");
          otherMinus.classList.add("hide");
        }
      });

      // переключаем текущий
      if (isOpen) {
        // закрыть
        answer.style.maxHeight = answer.scrollHeight + "px"; // чтобы transition сработал
        requestAnimationFrame(() => {
          answer.style.maxHeight = "0";
        });
        answer.classList.add("hide");
        plusIcon.classList.remove("hide");
        minusIcon.classList.add("hide");
      } else {
        // открыть
        answer.classList.remove("hide");
        plusIcon.classList.add("hide");
        minusIcon.classList.remove("hide");
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.addEventListener(
          "transitionend",
          () => {
            // убираем фиксированную высоту, чтобы блок мог подстраиваться при изменении контента
            if (!answer.classList.contains("hide")) {
              answer.style.maxHeight = "none";
            }
          },
          { once: true }
        );
      }
    });
  });
});
