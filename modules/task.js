import { getStorage, setItem } from "./storage.js";

let storage = [];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const getId = () => {
  const storage = JSON.parse(localStorage.getItem("storage")) || [];
  const ids = storage.map((i) => i.id);
  while (true) {
    const id = getRandomInt(1000000);
    if (!ids.includes(id)) {
      return id;
    }
  }
};

export const addTask = (task, user) => {
  storage = [...getStorage()];
  if (task && user) {
    storage.push({
      task: task,
      status: false,
      user: user,
      id: getId(),
    });
    setItem(storage, user);
  }
};

export const delTask = (i, user) => {
  storage = [...getStorage()];
  storage.splice(i, 1);
  setItem(storage, user);
};

export const changeTaskStatus = (i, user) => {
  storage = [...getStorage()];
  storage[i].status = !storage[i].status;
  setItem(storage, user);
};
