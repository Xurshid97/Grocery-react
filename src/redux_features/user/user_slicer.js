// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  accessToken: '',
  isLoggedIn: false,
  homeAddress: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
  deliveryAddress: {
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      const { name, phone, accessToken } = action.payload;
      state.name = name;
      state.phone = phone;
      state.isLoggedIn = true;
      state.accessToken = accessToken;
      localStorage.setItem("accessToken", accessToken);
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
      localStorage.setItem("accessToken", action.payload);
    },
    logout: (state) => {
      state.name = '';
      state.phone = '';
      state.accessToken = '';
      state.isLoggedIn = false;

      localStorage.removeItem("accessToken");
    },

    updateBasicInfo: (state, action) => {
      const { username, email, raqam } = action.payload;
      state.name = username;
      state.email = email;
      state.phone = raqam;
    },
    updateHomeAddress: (state, action) => {
      const { street, city, state: stateName, zip, country } = action.payload;
      state.homeAddress = { street, city, state: stateName, zip, country };
    },
    updateDeliveryAddress: (state, action) => {
      const { street, city, state: stateName, zip, country } = action.payload;
      state.deliveryAddress = { street, city, state: stateName, zip, country };
    },
  },
});

export const { login, logout, setAccessToken, updateBasicInfo, updateHomeAddress, updateDeliveryAddress } = userSlice.actions;
export default userSlice.reducer;
