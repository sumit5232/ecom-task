import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";


function ProductList() {
  const { productData } = useSelector((state) => state.product);


  return (
    <>
      <h1 className="text-center mt-3">ProductList</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {productData?.productData?.map((item, index) => {
            return (
              <ShoppingCart
                img={item.img}
                name={item.name}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductList;