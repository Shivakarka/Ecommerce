import React, { useState, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { add } from "../redux/cartSlice";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(add(product));
  };

  // fetch individual product from API
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );

      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const DisplayProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            className="card"
            src={product.image}
            alt={product.title}
            height="400px"
            width="350px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppecase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-start"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 px-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          <Link
            className="btn btn-dark ms-2 px-3 py-2"
            aria-current="page"
            to="/cart"
          >
            View Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py 4">
          {loading ? <Spinner animation="border" /> : <DisplayProduct />}
        </div>
        <div className="md"></div>
      </div>
    </div>
  );
}

export default Product;
