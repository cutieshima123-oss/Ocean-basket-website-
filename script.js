const items = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
  items.forEach(item => {
    const pos = item.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      item.classList.add("show");
    }
  });
});
