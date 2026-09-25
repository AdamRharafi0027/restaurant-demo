import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./ProductSlice/ProductSlice"

const store = configureStore({
    reducer: {
        ProductCart : ProductReducer
    }
})

export default store;