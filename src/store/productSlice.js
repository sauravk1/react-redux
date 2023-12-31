import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios";

export const STATUSES = {
    LOADING: "loading",
    SUCCESS: "success",
    ERROR: "Error"
}
//newer way of creating Thunk
export const fetchProducts = createAsyncThunk('products', async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})
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
        // setStatus(state,action) {
        //     state.status = action.payload;
        // }
    },
        extraReducers: ( builder)=> {
            builder.addCase(fetchProducts.pending, (state)=>{
                state.status = STATUSES.LOADING
            }).addCase(fetchProducts.fulfilled, (state, action) => {
                state.data = action.payload
                state.status = STATUSES.SUCCESS
            }).addCase(fetchProducts.rejected, (state) => {
                state.status = STATUSES.ERROR
            })
        }

})

//older way of creating Thunk

// export function fetchProducts() {
//     return async function fetchProductThunk(dispatch) {
//         dispatch( setStatus(STATUSES.LOADING))
//         try {
//             const res = await axios.get("https://fakestoreapi.com/products");
//             console.log(res.data)
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.SUCCESS))
            
//         } catch (error) {
//             dispatch(setStatus(STATUSES.ERROR))
//         }
     
//     }
// }



//here we did destructing 
export const { setProducts, setStatus} = productsSlice.actions

export default productsSlice.reducer