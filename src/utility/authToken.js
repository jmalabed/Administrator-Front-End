const getBisToken = () => {
  return localStorage.getItem("token");
};

const setBisToken = (token) => {
  return localStorage.setItem("token", token);
};

const clearBisToken = () => {
  return localStorage.setItem("token", "");
};

export { getBisToken, setBisToken, clearBisToken };
