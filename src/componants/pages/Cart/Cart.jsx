import React, { useEffect, useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cartdata, setCartdata] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  const getItemFromLS = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart) {
      console.log(cart);
      setCartdata(cart);

      let subTotal = 0;
      cart.forEach((item) => {
        subTotal += item.productdata.offerPrice * item.quantity;
      });
      console.log(subTotal);
      setSubtotal(subTotal);
    } else {
      console.log("cart is empty");
    }
  };

  useEffect(() => {
    getItemFromLS();
  }, []);

  const removeItem = (index) => {
    let tempData = [...cartdata];
    tempData.splice(index, 1);
    setCartdata(tempData);
    localStorage.setItem("cart", JSON.stringify(tempData));
    getItemFromLS();
    window.location.reload();
  };

  return (
    <div className="mainCart-container">
      <div className="cart-heading">
        <h1>YOUR CART</h1>
      </div>
      <div className="cart-conainer">
        {cartdata.length > 0 ? (
          <table className="cartTable">
            <thead className="cart-head">
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <hr className="cart-hr" />
            <tbody>
              {cartdata.map((item, index) => {
                return (
                  <tr key={index} className="cartitemrow">
                    <td>
                      <div
                        className="cartProduct"
                        onClick={() => {
                          window.location.href = `/Data/${item.productdata._id}`;
                        }}
                      >
                        <img src={item.productdata.image[0]} alt="img" />
                        <p>{item.productdata.name}</p>
                      </div>
                    </td>

                    <td className="quantity">
                      <button
                        className="minus"
                        onClick={() => {
                          let newCartData = [...cartdata];

                          if (newCartData[index].quantity > 1) {
                            newCartData[index].quantity -= 1;
                            setCartdata(newCartData);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify(newCartData)
                            );
                            getItemFromLS();
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="cart-quantity">{item.quantity}</span>
                      <button
                        className="plus"
                        onClick={() => {
                          let newCartData = [...cartdata];

                          newCartData[index].quantity += 1;
                          setCartdata(newCartData);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify(newCartData)
                          );
                          getItemFromLS();
                        }}
                      >
                        +
                      </button>
                    </td>

                    <td>
                      <p className="cart-price">
                        ₹{item.productdata.offerPrice}
                      </p>
                    </td>

                    <td>
                      <p className="cart-total">
                        ₹{item.productdata.offerPrice * item.quantity}
                      </p>
                    </td>

                    <td>
                      <div
                        className="deletebtn"
                        onClick={() => {
                          removeItem(index);
                        }}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {/* <hr /> */}
              <tr className="Net-total">
                <td className="totaltableleft">Net-Total - </td>
                <td className="totaltableright">₹{subtotal}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div className="emptyCart">
            <h1>Your Cart Is Empty</h1>
            <i
              className="fa-solid fa-bag-shopping"
              onClick={() => {
                window.location.href = `/`;
              }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
