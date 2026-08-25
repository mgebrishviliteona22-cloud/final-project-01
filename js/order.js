const state = {
  step: 1,
  file: { name: null, size: null, dataUrl: null },
  product: "photo",
  size: "13x18",
  sizePrice: 0.7,
  paper: "premium",
  qty: 2,
  delivery: "courier",
  deliveryPrice: 6.0,
};

const steps = [
  { n: 1, label: "ატვირთვა" },
  { n: 2, label: "პარამეტრები" },
  { n: 3, label: "მიტანა" },
  { n: 4, label: "შემოწმება" },
  { n: 5, label: "დადასტურება" },
];

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=500&q=80";

function renderStepper() {
  const el = document.getElementById("stepper");
  el.innerHTML = "";
  steps.forEach((s, i) => {
    const node = document.createElement("div");
    node.className =
      "step-node " +
      (s.n < state.step ? "done" : s.n === state.step ? "active" : "");
    node.innerHTML = `<div class="step-circle">${
      s.n < state.step ? "✓" : s.n
    }</div><div class="step-label">${s.label}</div>`;
    el.appendChild(node);
    if (i < steps.length - 1) {
      const line = document.createElement("div");
      line.className = "step-line" + (s.n < state.step ? " done" : "");
      el.appendChild(line);
    }
  });
}

function goToStep(n) {
  state.step = n;
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.toggle("active", +p.dataset.panel === n));
  renderStepper();
  if (n === 2) syncStep2Preview();
  if (n === 3) syncStep3Preview();
  if (n === 4) syncStep4Review();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

const dropArea = document.getElementById("drop-area");
const fileInput = document.getElementById("file-input");
const previewBox = document.getElementById("preview-box");
const previewEmpty = document.getElementById("preview-empty");
const toStep2Btn = document.getElementById("to-step-2");

dropArea.addEventListener("click", () => fileInput.click());
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("dragover");
});
dropArea.addEventListener("dragleave", () =>
  dropArea.classList.remove("dragover"),
);
dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  dropArea.classList.remove("dragover");
  if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});
fileInput.addEventListener("change", (e) => {
  if (e.target.files.length) handleFile(e.target.files[0]);
});

function showPreview() {
  previewBox.classList.add("visible");
  previewEmpty.style.display = "none";
  toStep2Btn.disabled = false;
}

function handleFile(file) {
  state.file.name = file.name;
  state.file.size = (file.size / (1024 * 1024)).toFixed(1) + " MB";
  const reader = new FileReader();
  reader.onload = (e) => {
    state.file.dataUrl = e.target.result;
    document.getElementById("preview-img").src = file.type.startsWith("image")
      ? e.target.result
      : DEFAULT_IMG;
    document.getElementById("preview-name").textContent = state.file.name;
    document.getElementById("preview-size").textContent = state.file.size;
    showPreview();
  };
  if (file.type.startsWith("image")) reader.readAsDataURL(file);
  else {
    state.file.dataUrl = DEFAULT_IMG;
    document.getElementById("preview-img").src = DEFAULT_IMG;
    document.getElementById("preview-name").textContent = state.file.name;
    document.getElementById("preview-size").textContent = state.file.size;
    showPreview();
  }
}

document.getElementById("remove-file").addEventListener("click", (e) => {
  e.stopPropagation();
  state.file = { name: null, size: null, dataUrl: null };
  fileInput.value = "";
  previewBox.classList.remove("visible");
  previewEmpty.style.display = "block";
  toStep2Btn.disabled = true;
});

toStep2Btn.addEventListener("click", () => {
  if (!toStep2Btn.disabled) goToStep(2);
});

const productTypeLabels = {
  photo: "ფოტო დაბეჭდვა",
  doc: "დოკუმენტის ბეჭდვა",
  tile: "ტილო",
  card: "ბარათი",
};
const paperLabels = {
  premium: "პრემიუმ ბრჭყვიალა",
  matte: "მატი",
  satin: "საატინი",
};

document.querySelectorAll("#product-type-grid .option-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#product-type-grid .option-btn")
      .forEach((x) => x.classList.remove("selected"));
    b.classList.add("selected");
    state.product = b.dataset.type;
    syncStep2Preview();
  }),
);
document.querySelectorAll("#size-grid .option-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#size-grid .option-btn")
      .forEach((x) => x.classList.remove("selected"));
    b.classList.add("selected");
    state.size = b.dataset.size;
    state.sizePrice = parseFloat(b.dataset.price);
    syncStep2Preview();
  }),
);
document.querySelectorAll("#paper-grid .option-btn").forEach((b) =>
  b.addEventListener("click", () => {
    document
      .querySelectorAll("#paper-grid .option-btn")
      .forEach((x) => x.classList.remove("selected"));
    b.classList.add("selected");
    state.paper = b.dataset.paper;
    syncStep2Preview();
  }),
);
document.getElementById("qty-minus").addEventListener("click", () => {
  state.qty = Math.max(1, state.qty - 1);
  syncStep2Preview();
});
document.getElementById("qty-plus").addEventListener("click", () => {
  state.qty = Math.min(999, state.qty + 1);
  syncStep2Preview();
});

function productTotal() {
  return state.sizePrice * state.qty;
}

function syncStep2Preview() {
  document.getElementById("qty-value").textContent = state.qty;
  document.getElementById("cfg-preview-img").src =
    state.file.dataUrl || DEFAULT_IMG;
  document.getElementById("cfg-meta-size").innerHTML =
    `${state.size} სმ · <strong>${paperLabels[state.paper]}</strong>`;
  document.getElementById("cfg-meta-qty").textContent = state.qty;
  document.getElementById("cfg-price").textContent =
    productTotal().toFixed(2) + " ₾";
}

document.querySelectorAll(".delivery-option").forEach((el) =>
  el.addEventListener("click", () => {
    document
      .querySelectorAll(".delivery-option")
      .forEach((x) => x.classList.remove("selected"));
    el.classList.add("selected");
    state.delivery = el.dataset.method;
    state.deliveryPrice = parseFloat(el.dataset.price);
    syncStep3Preview();
  }),
);

function syncStep3Preview() {
  document.getElementById("dlv-preview-img").src =
    state.file.dataUrl || DEFAULT_IMG;
  document.getElementById("dlv-meta-1").textContent = `${state.qty} x ${
    productTypeLabels[state.product]
  }`;
  document.getElementById("dlv-meta-2").textContent =
    `${state.size} სმ · ${paperLabels[state.paper]}`;
  document.getElementById("dlv-sum-product").textContent =
    productTotal().toFixed(2) + " ₾";
  document.getElementById("dlv-sum-delivery").textContent =
    state.deliveryPrice === 0
      ? "უფასო"
      : state.deliveryPrice.toFixed(2) + " ₾";
  document.getElementById("dlv-total").textContent =
    (productTotal() + state.deliveryPrice).toFixed(2) + " ₾";
}

function syncStep4Review() {
  document.getElementById("rev-thumb").src = state.file.dataUrl || DEFAULT_IMG;
  document.getElementById("rev-product").innerHTML =
    `${state.qty} x ${productTypeLabels[state.product]}<br>${state.size} სმ · ${
      paperLabels[state.paper]
    }<br>რაოდენობა: ${state.qty}`;
  const dName =
    state.delivery === "courier"
      ? "კურიერი · 1–2 სამუშაო დღე"
      : "თვითმობილობით აღება · 2–3 სამუშაო დღე";
  document.getElementById("rev-delivery").textContent = dName;
  document.getElementById("rev-sum-product").textContent =
    productTotal().toFixed(2) + " ₾";
  document.getElementById("rev-sum-delivery").textContent =
    state.deliveryPrice === 0
      ? "უფასო"
      : state.deliveryPrice.toFixed(2) + " ₾";
  document.getElementById("rev-total").textContent =
    (productTotal() + state.deliveryPrice).toFixed(2) + " ₾";
}

document.getElementById("confirm-order").addEventListener("click", () => {
  const id =
    "#OP-" +
    new Date().toISOString().slice(2, 10).replace(/-/g, "") +
    "-" +
    Math.floor(1000 + Math.random() * 9000);
  document.getElementById("conf-order-id").textContent = id;
  goToStep(5);
});

document.getElementById("back-home").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.getElementById("view-orders").addEventListener("click", () => {
  window.location.href = "index.html";
});

document
  .querySelectorAll("[data-next]")
  .forEach((b) =>
    b.addEventListener("click", () => goToStep(+b.dataset.next)),
  );
document
  .querySelectorAll("[data-back]")
  .forEach((b) =>
    b.addEventListener("click", () => goToStep(+b.dataset.back)),
  );

renderStepper();
syncStep2Preview();
