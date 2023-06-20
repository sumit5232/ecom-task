import { useDispatch } from "react-redux";
import { addToCart } from "../store/feature/CartSlice";


const ShoppingCart = (props) => {

  const dispatch  = useDispatch()

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 mycard">
      <div className="card p-0 overflow-hidden h-80 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body text-center">
          <h5 className="card-title">$ {props.price}</h5>
          <p className="card-title">{props.name}</p>
          <button className="button" onClick={() => dispatch(addToCart(props.item))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;