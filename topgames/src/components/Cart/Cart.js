import "./cart.css";
import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = () => {
  const { cartData, removeCartData } = useContext(CartContext);
  const total = useRef({ price: 0 });
  const RazorPay = useRazorpay();
  const razorPayDisplay = useCallback(
    async (total) => {
      const options = {
        key: "rzp_test_lNdrVS4VlBSCrw",
        amount: total * 100,
        currency: "INR",
        name: "TopGames",
        description: "Gaming Transaction",
        handler: (res) => {
          console.log(res);
        },
        prefill: {
          name: "Carry Minati",
          email: "CarryBhai@gmail.com",
          contact: "9000051115",
        },
        notes: {
          address: "office address",
        },
        theme: {
          color: "#101010",
        },
      };
      const rzp1 = new RazorPay(options);
      rzp1.open();
    },
    [RazorPay]
  );

  return (
    <>
      <section>
        <section className="cart-display">
          {cartData.map((cartitem) => {
            return (
              <article className="cart-item">
                <img
                  src={`http://localhost:1337${cartitem?.attributes?.img.data.attributes.formats.thumbnail.url}`}
                  alt=""
                />
                <article>{cartitem?.attributes?.title}</article>
                <article>{cartitem?.attributes?.price}</article>
                <button
                  onClick={() => {
                    removeCartData(cartitem);
                    total.current.price =
                      total.current.price - cartitem?.attributes?.price;
                  }}
                >
                  Remove from cart
                </button>
              </article>
            );
          })}
        </section>
        <section className="bill-info">
          <article>Billing information</article>
          {cartData.map((cartitem) => {
            total.current.price =
              total.current.price + cartitem?.attributes?.price;
            return;
          })}
          <article>Total:${total.current.price}</article>
          <button
            onClick={() => {
              razorPayDisplay(total.current.price);
            }}
          >
            Check Out
          </button>
        </section>
      </section>
    </>
  );
};
export default Cart;
