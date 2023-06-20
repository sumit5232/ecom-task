import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addQTY,
  clearCart,
  removeProductFromCart,
  removeQTY,
} from "../store/feature/CartSlice";

function Cart() {
  const { cart } = useSelector((state) => state.product);

  let totalPrice = 0;
  cart?.forEach((product) => {
      totalPrice += product.price * product.quantity;
  });
  const dispatch = useDispatch();

  if (cart.length === 0)
    return <h1 className="text-center">Your Cart is Empty</h1>;

  return (
    <section className="py-4 container ">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart total Items:</h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {cart.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.img}
                        style={{ heigth: "6rem", width: "10rem" }}
                        alt=""
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => dispatch(removeQTY(item))}
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() => dispatch(addQTY(item))}
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => dispatch(removeProductFromCart(item))}
                      >
                        Remove Items
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total price: $ {totalPrice}</h2>
        </div>
        <div className="col=auto">
          <button
            className="btn btn-danger m-2"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
          <button className="btn btn-primary m-2">
            <Link
              to="/checkout"
              style={{ textDecoration: "none", color: "white" }}
            >
              Check Out
            </Link>
          </button> 
        </div>
      </div>
    </section>
  );
}


export default Cart;