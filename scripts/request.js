import { requestData ,request} from "../data/userData.js";
const bloodRequestForm = document.getElementById("blood-request-form");
bloodRequestForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Add your blood request form submission logic here
  // console.log("form data", bloodRequestForm[1].value);
  const formData = new FormData(bloodRequestForm);
  const bloodGroup = formData.get("blood-group");
  console.log(bloodGroup,typeof(bloodGroup));
  requestData(bloodGroup);
  console.log(request);
  // window.location.href = "../registeredUsers.html";
});
