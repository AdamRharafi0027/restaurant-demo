import { createSlice } from "@reduxjs/toolkit";



const ProductSlice = createSlice({
    name: "productCart",
    initialState : {
        ProductCart: [],
    },
    reducers : {
        addToCart : (state, action) => {
            const existingProduct = state.ProductCart.find((product) => product.id === action.payload.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.ProductCart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart : (state, action) => {
            state.ProductCart = state.ProductCart.filter((product) => product.id !== action.payload);
        },
        updateCartQuantity : (state, action) => {
            const product = state.ProductCart.find((item) => item.id === action.payload.id);

            if (!product) return;

            if (action.payload.quantity <= 0) {
                state.ProductCart = state.ProductCart.filter((item) => item.id !== action.payload.id);
            } else {
                product.quantity = action.payload.quantity;
            }
        }
    }

})

export const {addToCart, removeFromCart, updateCartQuantity} = ProductSlice.actions
export default ProductSlice.reducer