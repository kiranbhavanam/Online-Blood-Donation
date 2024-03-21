import { saveUser } from "../data/userData.js";
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  saveUser(registrationForm);
  // window.location.href = "registeredUsers.html";
  showPopUp();
});
function showPopUp() {
  document.querySelector(".overlay").classList.add("show");
  document.querySelector(".popup").classList.add("show");
  const okay = document.querySelector(".ok");
  okay.addEventListener("click", () => {
    document.querySelector(".overlay").classList.remove("show");
    document.querySelector(".popup").classList.remove("show");
  });
}
// showPopUp();
