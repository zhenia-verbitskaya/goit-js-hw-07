const area = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

btn.addEventListener("click", () => {
  colorName.textContent = getRandomHexColor();
  area.style.backgroundColor = colorName.textContent;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
