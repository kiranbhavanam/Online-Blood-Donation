import { display } from "./registers.js";
const bloodRequestForm = document.getElementById("blood-request-form");


display();

bloodRequestForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Add your blood request form submission logic here
  console.log("Request Blood button clicked");
});
