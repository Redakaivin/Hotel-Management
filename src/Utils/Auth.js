export let isLoggedIn = () => {
  return localStorage.getItem("isLoggedIn") === "true";
};

export let loginUser = () => {
  localStorage.setItem("isLoggedIn", "true");
};

export let logoutUser = () => {
  localStorage.removeItem("isLoggedIn");
};
