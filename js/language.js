function initLanguage() {
  const langButton = document.getElementById("language-toggle");

  if (!langButton) return;

  langButton.addEventListener("click", () => {
    if (window.location.pathname.includes("indexen")) {
      window.location.href = "index.html";
    } else {
      window.location.href = "indexen.html";
    }
  });
}

export { initLanguage };