const registrationForm = document.getElementById("registration-form");
const users = JSON.parse(localStorage.getItem("details")) || [];
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // storing the form data into local storage using object array.
  const formData = new FormData(registrationForm);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log("Register button clicked");
  users.push(data);
  localStorage.setItem("details", JSON.stringify(users));
});
export function display() {
  // console.log("hey");
  const details = JSON.parse(localStorage.getItem("details"));
  console.log("details:", details);
}
