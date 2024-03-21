import { users } from "../data/userData.js";
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
  document.querySelector(".js-userDetails").innerHTML = html;
}
generateUsers(users);
