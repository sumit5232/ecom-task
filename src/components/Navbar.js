import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.product.cart)
  console.log("hii",cartItems)
 
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="btn btn-light">
          <Link to="/" style={{ textDecoration: "none" }}>
            Ecommerce
          </Link>
        </button>
        <button className="btn btn-outline-success">
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div>Cart:{cartItems.length}</div>
          
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;