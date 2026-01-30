const links = document.querySelectorAll(".menu-list__link");
const mainButton = document.querySelector(".main__button");
const mainScroll = document.querySelector(".main__scroll");

const allLinks = [...links, mainButton, mainScroll]

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);
    if (section) {
      // из библиотеки, подкюченной в index.html, для совместимости со всем браузерами
      // <script src="https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest"></script>
      seamless.scrollIntoView(section, {
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    }
  });
});
