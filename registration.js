const users = JSON.parse(localStorage.getItem("details")) || [];
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
export function display() {
  // console.log("hey");
  const details = JSON.parse(localStorage.getItem("details"));
  console.log("details:", details[0]);
}
display();
function generateUsers() {
  let html = "";
  users.forEach((user) => {
    html += `
    <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user["blood-group"]}</td>
        <td>${user.contact}</td>
        <td>${user.location}r</td>
      </tr>
  `;
  });
  // console.log(html);
  document.querySelector(".js-userDetails").innerHTML = html;
}
generateUsers();
// const key = document.querySelector(".js-userDetails");
// console.log(key);
// key.innerHTML = `<h1>hello</h1>`;
