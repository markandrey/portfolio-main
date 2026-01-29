// const modalButton = document.querySelector(".more");
// const modal = document.querySelector(".modal");
// const overlay = modal.querySelector(".overlay");
// const closeButton = modal.querySelector(".modal__close");

// modalButton.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });

// overlay.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

// closeButton.addEventListener("click", () => {
//   modal.classList.add("hidden");
// });

const modalButtons = document.querySelectorAll(".more");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".overlay");
const closeButton = modal.querySelector(".modal__close");
const modalTitle = modal.querySelector(".modal__title");

modalButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalTitle.textContent =
      index === 0
        ? "Консультация по вашему сайту"
        : "Консультация по вашему приложению";
  });
});

overlay.addEventListener("click", () => {
  modal.classList.add("hidden");
});

closeButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
