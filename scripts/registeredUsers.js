import { users } from "../data/userData.js";
import { request } from "../data/userData.js";
export function specificGroup(request) {
  const specificDetails = [];
  console.log(request);
  users.filter((user) => {
    user["blood-group"] === request && specificDetails.push(user);
  });

  // console.log(users);
  console.log(specificDetails);
  generateUsers(specificDetails);
  // setTimeout(() => {}, 1000);
}
specificGroup(request);
// specificGroup("A+");
function generateUsers(details) {
  let html = "";
  details.forEach((user) => {
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
  const targetEle = document.querySelector(".js-userDetails");
  targetEle.innerHTML = html;
}
// generateUsers(users);
document.querySelector(".js-go-back").addEventListener("click", () => {
  window.location.href = "request.html";
});
