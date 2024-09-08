"use strict";
import { delTask, changeTaskStatus } from "./task.js";

export const addEvents = (user) => {
  document.querySelectorAll(".del-task").forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      delTask(index, user);
    });
  });

  document.querySelectorAll(".change-status").forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      changeTaskStatus(index, user);
    });
  });
};
