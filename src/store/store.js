import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'


//central store
const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
export default store;