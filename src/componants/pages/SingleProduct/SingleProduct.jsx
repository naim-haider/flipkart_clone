import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Data } from "../../Data";
import Rating from "../../Rating";
import "./SingleProduct.css";
import { toast } from "react-toastify";

const SingleProduct = () => {


  const { id } = useParams();
  const product = Data.find((p) => String(p._id) === id);
  if (!product) return null;
  console.log(product);

  const [productdata, setProductdata] = useState(product)
  const [count, setCount] = useState(product.quantity)



  const addToCart = () =>{
    let cart = JSON.parse(localStorage.getItem('cart'));

    if(cart){
      // alert('1 item is already added to the cart')
      let itemInCart = cart.find(item => item.productdata._id === productdata._id)
      if(itemInCart){
        cart = cart.map(item =>{
          if(item.productdata._id === productdata._id){
            return {
              ...item,
              quantity:item.quantity + count
            }
          }
          else{
            return item
          }
        })
        localStorage.setItem('cart', JSON.stringify(cart))
      }
      else{
        cart = [
          ...cart, 
          {
            productdata,
            quantity: count
          }
        ]
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }
    else{
      cart=[{
        productdata,
        quantity:count
      }]
      console.log(cart);
      localStorage.setItem('cart', JSON.stringify(cart))
    }

    toast.success('item added to cart')
    window.location.reload();
  }


  return (
    <div className="containers single-product">
      <div className="row1">
        <div className="single-image">
          <img className="img" src={product.image} alt={product.name} />
        </div>
        <div className="product-container">
          <div className="product-dtl">
            <div className="product-info">
              <div className="product-name">{product.name}</div>
            </div>
            <p className="desc">{product.description}</p>

            <div className="product-count">
              <div className="single-box">
                <div className="price">
                  <h6>Price</h6>
                  <span>₹{product.offerPrice}</span>
                </div>

                <hr />

                <div className="status">
                  <h6>Status</h6>
                  {product.countInStock > 0 ? (
                    <span>In Stock</span>
                  ) : (
                    <span>Unavailable</span>
                  )}
                </div>

                <hr />

                <div className="review">
                  <h6>Review</h6>
                  <Rating value={product.rating} />
                  <span>{product.reviews} reviews</span>
                </div>
              </div>

              <hr />

              {product.countInStock > 0 ? (
                <div className="quantity-container">
                  <div className="quantity">
                    <h6>Quantity</h6>
                    <select className="cart-select">
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option value={x + 1} key={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div> 
                  <div className="add-to-cart">
                    <Link onClick={()=>addToCart()} to={""}className="add-to-cart-text">
                        <button className="add-to-cart-btn">ADD TO CART</button>
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="row2">
        <div className="noreview">
          <div className="bottom-left">
            <h6>Reviews</h6>
            <h5 className="alert alert-info mt-3">No Reviews</h5>
            <div className="admin-lorem">
              <strong>Naim Haider</strong>
              <Rating />
              <span>Aug 12 2023</span>
              <div className="lorem alert alert-info mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                consequatur asperiores animi, fugit quas repellat recusandae
                laborum similique in? Officiis, quidem sapiente natus error
                rerum impedit ad quos nulla! Fugiat?
              </div>
            </div>
          </div>
          <div className="customer-review">
            <h6>WRITE A CUSTOMER REVIEW</h6>
            <div></div>

            <form>
              <div className="select-rating">
                <strong>Rating</strong>
                <select className="choose">
                  <option value="">Select...</option>
                  <option value="">1-Poor</option>
                  <option value="">2-Fair</option>
                  <option value="">3-Good</option>
                  <option value="">4-Very Good</option>
                  <option value="">5-Excellent</option>
                </select>
              </div>
              <div className="comment">
                <strong>Comment</strong>
                <textarea rows="3" className="text-area"></textarea>
              </div>
              <div className="Submitt">
                <button className="sbmt-btn">SUBMIT</button>
              </div>
            </form>
            <div className="please-login alert alert-warning">
              Please{" "}
              <Link className="please-login-strong" to={"/loginSite"}>
                "<strong>Login</strong>"
              </Link>{" "}
              to write a review.
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};


export default SingleProduct;
