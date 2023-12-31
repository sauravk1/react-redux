import { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function Product() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect( () =>  {
        const getProducts = async () => {
            const res =await axios.get("https://fakestoreapi.com/products");
            setProducts(res.data);
        };
        getProducts();
    },[])
    const handleAddToCart = (product)=> {  
        dispatch(addToCart(product))
    }
    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div key={product.id} className="card" >
                    <img className="img" src={product.image} />
                    <h6 >{product.title}</h6>
                    <h5>${product.price}</h5>
                    <button onClick={()=>handleAddToCart(product)} className="btn" >Add to cart</button>
                    </div>
            ))}
        </div>
    )
}
export default Product;