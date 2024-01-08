import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./style.css";

let users = [
  {
    id: "1",
    first_name: "Nguyen Van",
    last_name: "A",
  },
  {
    id: "2",
    first_name: "Tran Van",
    last_name: "B",
  },
  {
    id: "3",
    first_name: "Tran Van",
    last_name: "C",
  },
  {
    id: "4",
    first_name: "Nguyen Van",
    last_name: "D",
  },
];

let data = "";

for (let index = 0; index < users.length; index++) {
  //   users[index];

  data += buildTrData(users[index]);
}

function buildTrData(user) {
  return `<tr>
    <th scope="row">${user.id}</th>
    <td>${user.first_name}</td>
    <td>${user.last_name}</td>
    <td>
      <button type="button" class="btn btn-outline-primary">
        Edit
      </button>
      <button type="button" class="btn btn-outline-danger">
        Delete
      </button>
    </td>
  </tr>`;
}

document.getElementById("tbody-user").innerHTML = data;
