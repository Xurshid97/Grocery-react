// src/features/user/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  phone: '',
  accessToken: '',
  isLoggedIn: false,
  deliveryAddress: {
    delivery_instructions: '',
    street: '',
    district: '',
    region: '',
    city: '',
    postal_code: '',
  },
}

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
    addDeliveryAddress: (state, action) => {
      const { delivery_instructions, street, district, region, city, postal_code } = action.payload;
      state.deliveryAddress = { delivery_instructions, street, district, region, city, postal_code };
    },
  },
});

export const { login, logout, setAccessToken, updateBasicInfo, addDeliveryAddress } = userSlice.actions;
export default userSlice.reducer;
