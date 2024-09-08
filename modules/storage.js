import { init } from "./render.js";

export const getStorage = () => {
  return JSON.parse(localStorage.getItem("storage")) || [];
};

export const setItem = (value, user) => {
  localStorage.setItem("storage", JSON.stringify(value));
  init(user);
};
