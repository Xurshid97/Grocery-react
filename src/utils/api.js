// create a utility function to handle API requests
import axios from "axios";
export const API_BASE_URL = "https://shoyusuf.pythonanywhere.com/api"; // replace with your actual API base URL

// function to make post request to the endpoint for registering a new user
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register/`, userData, { withCredentials: true });
    return response.data; // return the response data
  } catch (error) {
    console.error("Error registering user:", error);
    throw error; // rethrow the error for further handling
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login/`, credentials, { withCredentials: true });
    return response.data; // return the response data
  } catch (error) {
    console.error("Error logging in user:", error);
    throw error; // rethrow the error for further handling
  }
};

export const refreshAccessToken = async () => {
  try {
    const response = await axios.post(`${API_BASE_URL}/token/refresh/`, {}, { withCredentials: true });
    return response.data; // return the new access token
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error; // rethrow the error for further handling
  }
}


// get all products from the backend
export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/`);
    return response.data; // return the products data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // rethrow the error for further handling
  }
}
