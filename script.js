const isMobile = window.innerWidth <= 767;
const nav = document.getElementById("navMenu");
const closeLinks = document.querySelectorAll(".close-link");
const themes = {
  blue: "#38bdf8" /* info / primary (your reference) */,
  green: "#22c55e" /* success */,
  red: "#ef4444" /* error / danger */,
  yellow: "#facc15" /* warning */,
  orange: "#fb923c" /* alert / energy */,
  purple: "#a855f7" /* special / premium */,
  pink: "#ec4899" /* highlight / fun */,
};

function toggleMenu(value) {
  if (value === "0") {
    nav.style.display = "flex";
    setTimeout(() => isMobile && (nav.style.right = value), 200);
  } else {
    nav.style.right = value;
    setTimeout(() => isMobile && (nav.style.display = "none"), 200);
  }
}

closeLinks.forEach((link) => {
  link.addEventListener("click", function () {
    toggleMenu("-100%");
  });
});

/* Theme Changing Script */
document.querySelectorAll(".theme-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    changeTheme(btn.dataset.theme);
  });
});

function changeTheme(theme) {
  const color = themes[theme] || themes.blue;

  document.documentElement.style.setProperty("--primary-color", color);

  localStorage.setItem("themeColor", theme);
}

const savedTheme = localStorage.getItem("themeColor");
if (savedTheme) {
  changeTheme(savedTheme);
}

const defaultTheme = "blue";

document.querySelectorAll(".theme-btn").forEach((btn) => {
  const theme = btn.dataset.theme;

  if (savedTheme) {
    if (savedTheme === theme) {
      btn.classList.add("active");
    }
  } else if (theme === defaultTheme) {
    btn.classList.add("active");
  }

  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".theme-btn")
      .forEach((b) => b.classList.remove("active"));

    btn.classList.add("active");
  });
});
