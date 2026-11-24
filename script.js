// Academy Test Site — простые интерактивные элементы без внешних зависимостей.
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("btn-start");
  const aboutBtn = document.getElementById("btn-about");

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      console.info("Переход к разделу «Программа»");
    });
  }

  if (aboutBtn) {
    aboutBtn.addEventListener("click", () => {
      console.info("Переход к разделу «О курсе»");
    });
  }

  // Подсветка активной карточки по клику (для наглядности на превью).
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      card.style.borderColor = "rgba(52, 211, 153, 0.6)";
      setTimeout(() => {
        card.style.borderColor = "";
      }, 600);
    });
  });
});
