import { init } from "./render.js";

export const getStorage = () => {
  return JSON.parse(localStorage.getItem("storage")) || [];
};

export const setItem = (storage, user) => {
  localStorage.setItem("storage", JSON.stringify(storage));
  init(user);
};
