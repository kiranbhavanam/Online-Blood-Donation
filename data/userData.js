export const users = JSON.parse(localStorage.getItem("details")) || [];
export function saveUser(registrationForm) {
  // storing the form data into local storage using object array.
  const formData = new FormData(registrationForm);
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  console.log("Register button clicked");
  users.push(data);
  localStorage.setItem("details", JSON.stringify(users));
}
