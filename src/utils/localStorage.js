export const getObj = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

export const setObj = (name, obj) => {
  return localStorage.setItem(name,  JSON.stringify({obj,time: new Date()}));
};
