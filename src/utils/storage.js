const STORAGE_KEY = "grocery_cart";

export const saveToLocalStorage = (cartItems) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cartItems));
};

export const getFromLocalStorage = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const clearLocalStorage = () => {
  localStorage.removeItem(STORAGE_KEY);
};
