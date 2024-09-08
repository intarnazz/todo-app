import { getStorage } from "./storage.js";
import { addEvents } from "./events.js";

export const init = (user) => {
  const storage = getStorage();
  let tag = "";
  let num = 1;
  for (let i = 0; i < storage.length; i++) {
    if (user === storage[i].user) {
      tag += `
      <tr class="table-light ${storage[i].status ? "complited" : ""}">
        <td>${num++}</td>
        <td class="task">${storage[i].task}</td>
        <td>${storage[i].status ? "Завершено" : "В процессе"}</td>
        <td>
          <button class="btn btn-danger del-task" data-index="${i}">Удалить</button>
          <button class="btn btn-success change-status" data-index="${i}">
            ${storage[i].status ? "Не готово" : "Завершить"}
          </button>
        </td>
      </tr>
      `;
    }
  }
  document.getElementById("table").innerHTML = tag;
  
  addEvents(user);
};
