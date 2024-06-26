const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (textInput.value === "" || textInput.value.trim().length === 0) {
    textOutput.textContent = "Anonymous";
  } else {
    textOutput.textContent = event.currentTarget.value.trim();
  }
});
