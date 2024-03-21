import { saveUser } from "../data/userData.js";
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveUser(registrationForm);
  // window.location.href = "registeredUsers.html";
});
