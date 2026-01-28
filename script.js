const nav = document.getElementById("navMenu");
const closeLinks = document.querySelectorAll(".close-link");

function toggleMenu(value) {
  if (value === "0") {
    nav.style.display = "flex";
    setTimeout(() => (nav.style.right = value), 200);
  } else {
    nav.style.right = value;
    setTimeout(() => (nav.style.display = "none"), 200);
  }
}

closeLinks.forEach((link) => {
  link.addEventListener("click", function () {
    toggleMenu("-100%");
  });
});
