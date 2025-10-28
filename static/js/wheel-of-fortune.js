const prizes = [
  {
    text: "Скидка 5% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  {
    text: "Скидка 10% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  {
    text: "Подарочный сертификат",
    img: "assets/png/wof-prizes/gift-card.png",
  },
  {
    text: "Бесплатный подбор очков",
    img: "assets/png/wof-prizes/optic-service.png",
  },
  {
    text: "Скидка 7% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  {
    text: "Подарочный сертификат",
    img: "assets/png/wof-prizes/gift-card.png",
  },
  {
    text: "Скидка 15% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
];

const wheel = document.querySelector(".wheel");
const spinBtn = document.getElementById("spinBtn");
const modal = document.getElementById("modal");
const winText = document.getElementById("winText");
const closeModal = document.getElementById("closeModal");

let position = 0; // Текущий центральный индекс
let spinning = false;
let autoScrollInterval;

function render() {
  wheel.innerHTML = "";

  for (let i = -2; i <= 2; i++) {
    const idx = (position + i + prizes.length) % prizes.length;
    const item = document.createElement("div");
    item.classList.add("wheel-item");

    if (i === 0) {
      item.classList.add("size-center");
    } else if (i === -1 || i === 1) {
      item.classList.add("size-small");
    } else {
      item.classList.add("size-smallest");
    }

    const img = document.createElement("img");
    img.src = prizes[idx].img;
    img.alt = prizes[idx].text;
    img.className = "wheel-image";

    const text = document.createElement("div");
    text.textContent = prizes[idx].text;

    item.appendChild(img);
    item.appendChild(text);
    wheel.appendChild(item);
  }
}

// Начальная отрисовка
render();

// Для демонстрационного автоцикла перед запуском
function startAutoScroll() {
  if (autoScrollInterval) return;
  autoScrollInterval = setInterval(() => {
    position = (position + 1) % prizes.length;
    render();
  }, 2500);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = null;
}

startAutoScroll();

// Обработка вращения по кнопке
spinBtn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;
  stopAutoScroll();

  const spinTime = 7000 + Math.random() * 2000; // 3-5 секунд

  const spinStart = Date.now();
  let lastMoveTime = 0; // Время последнего сдвига

  function spinAnimation() {
    const elapsed = Date.now() - spinStart;
    const progress = Math.min(1, elapsed / spinTime);

    // Функция замедления (quadratic easeOut)
    function easeOutQuad(x) {
      return 1 - (1 - x) * (1 - x);
    }

    // Максимальный и минимальный delay между шагами (например, 50–450 мс)
    const minDelay = 50; // быстро в начале
    const maxDelay = 350; // замедление к концу

    // Вычисляем текущую задержку с помощью easing
    const currentDelay =
      minDelay + (maxDelay - minDelay) * easeOutQuad(progress);

    if (elapsed < spinTime) {
      if (Date.now() - lastMoveTime >= currentDelay) {
        position = (position + 1) % prizes.length;
        render();
        lastMoveTime = Date.now();
      }
      requestAnimationFrame(spinAnimation);
    } else {
      // Завершающая фиксация на результате
      const resultIdx = position;
      setTimeout(() => {
        winText.innerHTML = `${prizes[resultIdx].text}`;
        modal.classList.remove("hidden");
        spinning = false;
        startAutoScroll();
      }, 1200); //время паузы
    }
  }

  spinAnimation();
});

// Закрыть модальное окно
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
