const container = document.querySelector("#boxes");
const input = document.querySelector("input");
const add = document.querySelector("button[data-create]");
const remove = document.querySelector("button[data-destroy]");


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(ammount) {
  add.addEventListener("click", () => {
    ammount = input.value;

    if (container.innerHTML !== "") {
      container.innerHTML = "";
    }

    for (let i = 0; i < ammount; i++) {
      if (ammount >= 1 && ammount <= 100) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        container.append(box);
      }
    }

    input.value = "";
  })
}


function destroyBoxes() {
  remove.addEventListener("click", () => {
    container.innerHTML = "";
  })
}



createBoxes();
destroyBoxes();
