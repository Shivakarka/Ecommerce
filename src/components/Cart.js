
import React from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {add,remove,decreaseitem} from '../redux/cartSlice'


function Cart() {
  const state = useSelector((state) => state.cart);
 
 const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(remove(item));
    toast.warning("Product removed from cart", {autoClose: 2000})
  };

  const handleDecrease = (item) => {
     dispatch(decreaseitem(item))
  };

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem.id)}
            className="btn float-end btn-outline-primary"
            aria-label="close"
          >
            Delete
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <button
                onClick={() => handleAdd(cartItem)}
                className="btn btn-outline-primary btn-sm"
                aria-label="close"
              >
                +
              </button>
              <p className="lead fw-bold">QTY: {cartItem.qty}</p>
              <button
                onClick={() => handleDecrease(cartItem)}
                className="btn btn-outline-primary btn-sm"
                aria-label="close"
              >
                -
              </button>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    toast.error("Cart is Empty", {
      autoClose: 2000,
    });
    return (
      <div className="px-4 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Cart is Empty.</h3>
            <img className="card"
                src="https://media.istockphoto.com/vectors/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-vector-id841884438?k=20&m=841884438&s=612x612&w=0&h=yi6txQa52uAXEaKRLuijrmzYAT8GQrrv8NhHSD7lMOE="
                alt="empty cart"
                height={800}
                width={100}
              />
          </div>
        </div>
      </div>
    );
  };


  const checkoutBtn = () => {
    return (
      <div className="container">
        <div className="row">
          <Button
           
            className="btn btn-primary mb-5 w-25 mx-auto"
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    );
  }; 

  
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutBtn()}
    </div>
  );
}

export default Cart