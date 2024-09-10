"use strict";
import { delTask, changeTaskStatus } from "./task.js";

export const addEvents = (user) => {
  document.querySelectorAll(".del-task").forEach((button) => {
    button.addEventListener("click", function () {
      const key = this.getAttribute("data-key");
      delTask(key, user);
    });
  });

  document.querySelectorAll(".change-status").forEach((button) => {
    button.addEventListener("click", function () {
      const key = this.getAttribute("data-key");
      changeTaskStatus(key, user);
    });
  });
};
