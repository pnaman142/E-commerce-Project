import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const REACT_APP_API_TOKEN =
  "e5416f3787656f092c15bb44a3c3b394a1b4bac9212163602ece5442a09a5316fe5e24f08a8c26bc35b791693c232726d7588c2290c0dd5f80de477400d4fca6e64131e482b3cdde9b8a35007665f0dbe813275a54aec58e2861fc6f77c80274439ffd37b571f5421aa6f2c2437067b086842d16b8314450deb36092e1096cc9";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(
        " http://localhost:1337/api/products?populate=*",
        {
          headers: {
            Authorization: "bearer " + REACT_APP_API_TOKEN,
          },
        }
      );
      setProducts(res.data.data);
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    fetchData();

    return () => {};
  }, []);

  return (
    <div class="container bg-transparent">
      <h2>Latest Products</h2>
      <div class="row">
        {products.map((item, key) => {
          return (
            <div
              class="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3"
              onClick={() => {
                navigate(`/product/${item.id}`);
              }}
            >
              <div class="product">
                {" "}
                <img
                  src={`http://localhost:1337${item.attributes.img.data.attributes.formats.thumbnail.url}`}
                  alt=""
                />
              </div>
              <div class="title pt-4 pb-1">{item.attributes.title}</div>
              <div class="d-flex align-content-center justify-content-center">
                {" "}
              </div>
              <div class="price">$ {item.attributes.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
