function initTheme() {
  const themeButton = document.getElementById("theme-toggle");

  if (!themeButton) return;

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      themeButton.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeButton.textContent = "🌙";
    }
  });

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
  }
}

export { initTheme };