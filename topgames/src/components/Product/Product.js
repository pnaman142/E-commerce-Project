import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cart-context";
import axios from "axios";
import "./index.css";
import { useNavigate, useParams } from "react-router-dom";

const REACT_APP_API_TOKEN =
  "e5416f3787656f092c15bb44a3c3b394a1b4bac9212163602ece5442a09a5316fe5e24f08a8c26bc35b791693c232726d7588c2290c0dd5f80de477400d4fca6e64131e482b3cdde9b8a35007665f0dbe813275a54aec58e2861fc6f77c80274439ffd37b571f5421aa6f2c2437067b086842d16b8314450deb36092e1096cc9";

function Product({ item, key }) {
  const { addCartData, cartData } = useContext(CartContext);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `http://localhost:1337/api/products/${parseInt(params.id)}?populate=*`,
        {
          headers: {
            Authorization: "bearer " + REACT_APP_API_TOKEN,
          },
        }
      );
      setProduct(res.data.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();

    return () => {};
  }, [params?.id]);
  return (
    <div class="container my-5">
      {!loading ? (
        product && product?.attributes ? (
          <div class="row">
            <div class="col-md-3">
              <img
                class="img-fluid details-img"
                src={`http://localhost:1337${product?.attributes?.img.data.attributes.formats.thumbnail.url}`}
                alt=""
              />
            </div>
            <div class="col-md-6 my-3">
              <h3>{product?.attributes?.title}</h3>
              <h3>$ {product?.attributes?.price}</h3>

              <form class="add-inputs" method="post">
                <button
                  name="add_to_cart"
                  type="submit"
                  class="btn btn-primary btn-lg"
                  onClick={() => {
                    navigate("/cart");
                    !cartData.find((item) => item.id === product.id)
                      ? addCartData(product)
                      : alert("Product already is in the cart");
                  }}
                >
                  Add to cart
                </button>
              </form>
              <form class="add-inputs" method="post">
                <button
                  name="add_to_cart"
                  type="submit"
                  class="btn btn-primary btn-lg"
                >
                  Add to Wishlist
                </button>
              </form>
              <div style={{ clear: "both" }}></div>

              <p class="par-title mt-4 mb-1">About this product</p>
              <p class="dummy-description mb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
                assumenda voluptatem tempore dolor quod. Expedita, id, minus
                similique dolor sed adipisci aliquam natus amet doloremque
                delectus cupiditate? Sint, quasi, ad necessitatibus omnis
                quaerat tenetur corporis porro aut, natus ex ab id vel odit
                veniam fugiat temporibus aperiam quia rem minima!
              </p>
            </div>
          </div>
        ) : (
          <h5>Sorry,this product is not available now...</h5>
        )
      ) : (
        <div>{loading} "loading..."</div>
      )}
    </div>
  );
}

export default Product;
