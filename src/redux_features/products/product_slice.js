// src/features/products/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  categories: [],
  subcategories: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;

      // Extract unique categories
      const categoriesMap = new Map();
      const subcategoriesMap = new Map();

      action.payload.forEach(product => {
        const subcat = product.subcategory;
        const cat = subcat?.category;

        if (cat && !categoriesMap.has(cat.id)) {
          categoriesMap.set(cat.id, cat);
        }

        if (subcat && !subcategoriesMap.has(subcat.id)) {
          subcategoriesMap.set(subcat.id, subcat);
        }
      });

      state.categories = Array.from(categoriesMap.values());
      state.subcategories = Array.from(subcategoriesMap.values());
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
