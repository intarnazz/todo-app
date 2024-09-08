"use strict";
import { addTask, delTask, changeTaskStatus } from "./modules/task.js";
import { init } from "./modules/render.js";

// const user = prompt("user name: ") || "виталя";
const user = prompt("user name: ");

document.getElementById("input").addEventListener("input", function () {
  let inputField = document.getElementById("input");
  let submitButton = document.getElementById("submit");

  submitButton.disabled = inputField.value.trim() === "";
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const task = document.getElementById("input").value.trim();
  addTask(task, user);
  document.getElementById("submit").disabled = true;
  this.reset();
});

document.getElementById("submit").disabled = true;
init(user);
