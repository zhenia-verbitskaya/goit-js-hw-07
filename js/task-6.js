const container = document.querySelector("#boxes");
const numberInput = document.querySelector("input");
const addButton = document.querySelector("button[data-create]");
const removeButton = document.querySelector("button[data-destroy]");

addButton.addEventListener('click', () => {
  const amount = numberInput.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

  numberInput.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  container.innerHTML = "";

  const boxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxes.push(box);
  }

  container.append(...boxes);
}

function destroyBoxes() {
    container.innerHTML = "";
}

removeButton.addEventListener("click", destroyBoxes);
