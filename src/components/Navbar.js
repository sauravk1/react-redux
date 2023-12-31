import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {
    //fetch no. of items from store
    const items = useSelector((state)=>state.cart)
    console.log({items});
    return (
        <div style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between"
        }}>
            <span className="logo">
                Redux store
            </span>
            <div>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/cart" className="navLink">Cart</Link>
                <span className="cartCount">Cart items: {items.length} </span>
            </div>
        </div>
    )
}
export default Navbar;