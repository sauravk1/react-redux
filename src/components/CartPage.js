import { useDispatch, useSelector } from "react-redux";
import {removeFromCart} from '../store/cartSlice'

function CartPage() {
    const items = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    const removeFromcartFn = (product)=> {
        dispatch(removeFromCart(product));
    }
    return (
        <div>
            <div className="cartWrapper">
                {items.map((item)=>(
                    <div id={item.id} className="cartCard">
                        <img src={item.image} />
                        <h5>{items.title}</h5>
                        <h5> Price: $ {item.price}</h5>
                        <button className="remove-btn" onClick={()=>removeFromcartFn(item)}>remove from cart</button>
                    </div>
                ))}

            </div>
        </div>
    )
 }
 export default CartPage;