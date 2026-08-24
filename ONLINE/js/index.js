function setMode(mode) {
  const btns = document.querySelectorAll(".mode-btn");
  btns.forEach((btn) => btn.classList.remove("active"));

  const active = document.querySelector(`.mode-btn[data-mode="${mode}"]`);
  if (active) active.classList.add("active");

  const title = document.getElementById("drop-title");
  const sub = document.getElementById("drop-sub");
  const icon = document.getElementById("drop-icon");

  if (mode === "doc") {
    icon.innerText = "📄";
    title.innerText = "ჩააგდეთ დოკუმენტი (PDF, DOCX) აქ";
    sub.innerText = "ან დააჭირეთ ასარჩევად (MAX 50MB)";
  } else {
    icon.innerText = "📸";
    title.innerText = "ჩააგდეთ ფოტოები აქ";
    sub.innerText = "ან დააჭირეთ ასარჩევად (JPG, PNG)";
  }
}

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});
