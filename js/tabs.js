const tabBattons = document.querySelectorAll(".design-list__item");
const tabDescriptions = document.querySelectorAll(".design__descr");
const tabImages = document.querySelectorAll(".design-images");
const tabTitles = document.querySelectorAll(".design__title");
const tabFeatureImages = document.querySelectorAll(".design-block__img");

const changeContent = (array, value) => {
  array.forEach((elem) => {
    if (elem.dataset.tabsField === value) {
      elem.classList.remove("hidden");

      if (elem.classList.contains("design__title")) {
        document.title = elem.textContent;
      }
    } else {
      elem.classList.add("hidden");
    }
  });
};

tabBattons.forEach((tabBatton) => {
  tabBatton.addEventListener("click", (event) => {
    const dataValue = tabBatton.dataset.tabsHandler;

    changeContent(tabDescriptions, dataValue);
    changeContent(tabImages, dataValue);
    changeContent(tabTitles, dataValue);
    changeContent(tabFeatureImages, dataValue);

    tabBattons.forEach((btn) => {
      if (btn === event.target) {
        btn.classList.add("design-list__item_active");
      } else {
        btn.classList.remove("design-list__item_active");
      }
    });
  });
});
