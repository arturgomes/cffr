export const isAuthenticated = () => localStorage.getItem("ui") !== null;
export const setId = (i) => { }
export const setName = (i) => { }
export const setUser = (i) => { }
export const setTu = (i) => { }
export const getUser = () => localStorage.getItem("tu") === '897316929176464ebc9ad085f31e7284' ? "customer" : "retail"
export const login = (token, name, id, tu) => {
  localStorage.setItem("tk", token);
  localStorage.setItem("usr", name);
  localStorage.setItem("ui", id);
  localStorage.setItem("tu", tu);
};
export const getFeedbackTmp = () => localStorage.getItem("fb");
export const setFeedbackTmp = (fb) => {
  localStorage.setItem("fb", fb);
};
export const logout = () => {
  localStorage.removeItem("tk");
  localStorage.removeItem("usr");
  localStorage.removeItem("ui");
  localStorage.removeItem("tu");
  localStorage.clear();
};

