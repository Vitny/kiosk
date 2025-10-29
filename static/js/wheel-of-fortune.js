const prizes = [
  {
    text: "Скидка 5% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  {
    text: "Скидка 10% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  { text: "Подарочный сертификат", img: "assets/png/wof-prizes/gift-card.png" },
  {
    text: "Бесплатный подбор очков",
    img: "assets/png/wof-prizes/optic-service.png",
  },
  {
    text: "Скидка 7% на диагностику зрения",
    img: "assets/png/wof-prizes/diagnostic.png",
  },
  { text: "Подарочный сертификат", img: "assets/png/wof-prizes/gift-card.png" },
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

let position = 0;
let spinning = false;
let autoScrollInterval = null;

// Создаём DOM элементы
function initWheel() {
  prizes.forEach((item, idx) => {
    const div = document.createElement("div");
    div.classList.add("wheel-item");
    div.dataset.index = idx;

    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.text;
    img.className = "wheel-image";

    const text = document.createElement("div");
    text.textContent = item.text;

    div.append(img, text);
    wheel.append(div);
  });
  updatePositions();
}

// Обновляем позиции (с анимацией)
function updatePositions() {
  const items = wheel.querySelectorAll(".wheel-item");
  const visibleRadius = 2;

  items.forEach((el) => {
    const idx = parseInt(el.dataset.index);
    let diff = idx - position;
    const n = prizes.length;

    if (diff > n / 2) diff -= n;
    if (diff < -n / 2) diff += n;

    if (Math.abs(diff) <= visibleRadius) {
      el.classList.add("visible");
      const scale = 1 - Math.abs(diff) * 0.15;
      const offsetX = diff * 260;
      const offsetY = Math.abs(diff) * 15;
      const zIndex = 10 - Math.abs(diff);

      el.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px) scale(${scale})`;
      el.style.zIndex = zIndex;
      el.style.opacity = 1;
    } else {
      el.classList.remove("visible");
      el.style.opacity = 0;
      el.style.transform = `translateX(0) scale(0.7)`;
    }
  });
}

// Автопрокрутка
function startAutoScroll() {
  if (autoScrollInterval) return;
  autoScrollInterval = setInterval(() => {
    position = (position + 1) % prizes.length;
    updatePositions();
  }, 3000);
}

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
  autoScrollInterval = null;
}

// Анимация вращения с переменной скоростью (250 → 400 мс)
spinBtn.addEventListener("click", () => {
  if (spinning) return;
  spinning = true;
  stopAutoScroll();

  const minDelay = 250; // начальная скорость (меньше — быстрее)
  const maxDelay = 400; // конечная скорость (больше — медленнее)
  const totalSpins =
    prizes.length * 2 + Math.floor(Math.random() * prizes.length); // тут делается 2 полных оборота и небольшое количество случайных шагов
  let currentStep = 0;
  let currentDelay = minDelay;

  function nextStep() {
    position = (position + 1) % prizes.length;
    updatePositions();
    currentStep++;

    // плавное увеличение задержки (эффект ease-out)
    const progress = currentStep / totalSpins;
    currentDelay = minDelay + (maxDelay - minDelay) * progress * progress; // замедляется квадратично

    if (currentStep < totalSpins) {
      setTimeout(nextStep, currentDelay);
    } else {
      const resultIdx = position;
      setTimeout(() => {
        winText.innerHTML = `${prizes[resultIdx].text}`;
        modal.classList.remove("hidden");
        spinning = false;
        startAutoScroll();
      }, 1000);
    }
  }

  nextStep();
});

// Модалка
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

// Инициализация
initWheel();
startAutoScroll();
