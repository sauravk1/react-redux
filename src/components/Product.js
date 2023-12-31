import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { STATUSES, fetchProducts } from "../store/productSlice";

function Product() {
    const productsSlice = useSelector((state)=>state.products);
    const products = productsSlice.data;
    const status = productsSlice.status
    const dispatch = useDispatch();
    useEffect( () =>  {
        const getProducts = async () => {
           dispatch(fetchProducts())
        };
        getProducts();
    },[])
    const handleAddToCart = (product)=> {  
        dispatch(addToCart(product))
    }
    return (
        <div className="productsWrapper">
            {status ===STATUSES.LOADING ? (
                <div> Loading </div>
            ): products.map((product) => (
                <div key={product.id} className="card" >
                    <img className="img" src={product.image} />
                    <h6 >{product.title}</h6>
                    <h5>${product.price}</h5>
                    <button onClick={()=>handleAddToCart(product)} className="btn" >Add to cart</button>
                    </div>
            ))
        }
        </div>
    )
}
export default Product;