const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const loginDetails = {};
  loginDetails[`${form.elements.email.name}`] = form.elements.email.value.trim();
  loginDetails[`${form.elements.password.name}`] = form.elements.password.value.trim();

  console.log(loginDetails);
  form.reset();
}
