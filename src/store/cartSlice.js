import { createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice ({
    //name of slice
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            state.push(action.payload)
        },
        removeFromCart(state,action) {
            return state.filter((item)=>item.id !== action.payload.id)
        }
    }
})

//here we did destructing 
export const {addToCart , removeFromCart} = cartSlice.actions
export default cartSlice.reducer