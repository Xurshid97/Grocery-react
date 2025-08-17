import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

const shop_cartSlice = createSlice({
  name: 'shop_cart',
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.list = action.payload;
    },
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.list.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.weight += 1; // Increment weight if item already exists, default to 1 if not specified
      } else {
        state.list.push({ ...product, weight: 1 });
      }
    },
    changeWeight: (state, action) => {
      const { productId, weight } = action.payload;
      const existingItem = state.list.find(item => item.id === productId);
      if (existingItem) {
        existingItem.weight = weight;
      }
    },
    incrementQuantity: (state, action) => {
      const { productId, weight } = action.payload;
      const existingItem = state.list.find(item => item.id === productId);
      if (existingItem) {
        existingItem.weight = Number(existingItem.weight) + Number(weight);
      }
    },
    decrementQuantity: (state, action) => {
      const { productId, weight } = action.payload;
      const existingItem = state.list.find(item => item.id === productId);
      if (existingItem && existingItem.weight > 1) {
        existingItem.weight = Number(existingItem.weight) - Number(weight);
      } else if (existingItem) {
        state.list = state.list.filter(item => item.id !== productId);
      }
    },
    removeFromCart: (state, action) => {
      const { productId, weight } = action.payload;
      const existingItem = state.list.find(item => item.id === productId);
      if (existingItem) {
        existingItem.weight -= weight;
        if (existingItem.weight <= 0) {
          state.list = state.list.filter(item => item.id !== productId);
        }
      }
    },
    clearCart: (state) => {
      state.list = [];
    }
  },

});

export const { setCartItems } = shop_cartSlice.actions;
export default shop_cartSlice.reducer;
