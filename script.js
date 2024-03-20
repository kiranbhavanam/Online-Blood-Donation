import { saveUser } from "./registration.js";
const bloodRequestForm = document.getElementById("blood-request-form");
const registrationForm = document.getElementById("registration-form");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveUser(registrationForm);
  //generating html dynamically for all users.
  // console.log("users:", users[0]["blood-group"]);
  window.location.href = "registeredUsers.html";
  // generateUsers();
});

bloodRequestForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Add your blood request form submission logic here
  console.log("Request Blood button clicked");
});
