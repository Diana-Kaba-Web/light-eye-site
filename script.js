document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector(".arrow-up");

  const scrollHandler = () => {
    if (window.scrollY > 100) {
      arrow.classList.add("visible");
    } else {
      arrow.classList.remove("visible");
    }
  };

  const clickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  arrow.addEventListener("click", clickHandler);

  window.addEventListener("scroll", scrollHandler);
});
