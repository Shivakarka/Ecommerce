import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Nav, Navbar, Container } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navigationbar() {
  const items = useSelector((state) => state.cart);
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand className="fw-bold">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link active" aria-current="page" to="/">
              {" "}
              Home
            </Link>
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </Nav>
          <Form className="d-flex">
            <Link to="/cart">
              {" "}
              <Button variant="outline-success" className=" me-4">
                <FaShoppingCart /> : {items.length}
              </Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
