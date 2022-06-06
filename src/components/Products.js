import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import DisplayProducts from "./DisplayProducts";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://my-json-server.typicode.com/Shivakarka/Ecomm-dummyapi/posts"
      );
      setData(await response.clone().json());
      setFilter(await response.json());
      setLoading(false);
    };
    getProducts();
  }, []);

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12">
          <h1 className="display-6 text-center fw-bolder">Categories</h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Spinner animation="border" />
        ) : (
          <DisplayProducts setFilter={setFilter} data={data} filter={filter} />
        )}
      </div>
    </div>
  );
}

export default Products;
