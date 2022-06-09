import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaTrash, FaListUl } from "react-icons/fa";
import { AnimationWrapper } from "react-hover-animation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { add } from "../redux/cartSlice";

const DisplayProducts = ({ data, filter, setFilter }) => {
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(add(product));
  };

  const handleDropdown = (value) => {
    if (value === "highest") {
      let sortedProducts = [...filter].sort((a, b) => b.price - a.price);
      setFilter(sortedProducts);
      toast("Products sorted High-Low");
    }
    if (value === "lowest") {
      let sortedProducts = [...filter].sort((a, b) => a.price - b.price);
      setFilter(sortedProducts);
      toast("Products sorted Low-High");
    }
  };

  // const handleDelete = (id) => {
  //   const newList = data.filter((x) => x.id !== id);
  //   setFilter(newList);
  //   toast("Product deleted");
  // };

  const filterProduct = (event) => {
    const updatedList = data.filter((x) => x.category === event);
    setFilter(updatedList);
  };

  return (
    <>
      <div
        className="buttons d-flex flex-column
    flex-sm-row justify-content-center mb-5 pb-5"
      >
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("men's clothing")}
        >
          Men's Clothings
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("women's clothing")}
        >
          Women clothings
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
        <button
          className="btn btn-outline-dark me-2"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelery
        </button>
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Sort by Price
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              handleDropdown("lowest");
            }}
          >
            Low - High
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              handleDropdown("highest");
            }}
          >
            High - Low
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {filter.map((product) => {
        return (
          <div key={product.id} className="col-md-3 mb-5">
            <div className="h-100">
              <div className="card h-100 text-center p-4">
                <AnimationWrapper>
                  <div className="bg-image">
                    <img
                      className="card-img-top img-fluid"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 10)}...
                    </h5>
                    <p className="card-text fw-bold"> ${product.price}</p>
                    <span
                      className="btn btn-outline-dark me-3"
                      onClick={() => {
                        addProduct(product);
                      }}
                    >
                      Add to cart
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-dark"
                    >
                      <FaListUl /> Info
                    </Link>
                    {/* <span
                      className="btn btn-outline-dark ms-2 "
                      onClick={() => {
                        handleDelete(product.id);
                      }}
                    >
                      <FaTrash />
                    </span> */}
                  </div>
                </AnimationWrapper>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DisplayProducts;
