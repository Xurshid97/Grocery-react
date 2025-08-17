// store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './redux_features/user/user_slicer';
import productsReducer from './redux_features/products/product_slice';
import shopCartReducer from './redux_features/shop_cart/shop_cart_slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    shopCart: shopCartReducer,
  },
});
