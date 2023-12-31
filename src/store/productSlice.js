import { createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const STATUSES = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "Error"
}

const productsSlice = createSlice ({
    //name of slice
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.SUCCESS
    },
    reducers: {
        setProducts(state,action) {
            state.data = action.payload;
        },
        setStatus(state,action) {
            state.status = action.payload;
        }

    }
})

export function fetchProducts() {
    return async function fetchProductThunk(dispatch) {
        dispatch( setStatus(STATUSES.LOADING))
        try {
            const res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data)
            dispatch(setProducts(res.data))
            dispatch(setStatus(STATUSES.SUCCESS))
            
        } catch (error) {
            dispatch(setStatus(STATUSES.ERROR))
        }
     
    }
}

//here we did destructing 
export const { setProducts, setStatus} = productsSlice.actions

export default productsSlice.reducer