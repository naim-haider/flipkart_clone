import {
  Favorite,
  FiberManualRecordRounded,
  FiberManualRecordOutlined,
} from "@mui/icons-material";
import React, { useState, useEffect, useCallback } from "react";
import "./Card.css";
import Rating from "../Rating";
import { Data } from "../Data";
import { Link } from "react-router-dom";

const Card = ({
  offerPrice,
  image,
  name,
  actualPrice,
  rating,
  reviews,
  keys,
}) => { 
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  // console.log(Data);


  const searchItem = JSON.parse(localStorage.getItem("searchData"));

  const carousel = useCallback(() => {
    setTimeout(() => {
      if (index < image.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 1000);
  }, [index, image.length]);

  useEffect(() => {
    show && carousel();
  }, [show, carousel]);

  return (
    <div className="card">
      <div className="card_in card_heart">
        <Favorite className="heart" />
      </div>

      <div className="dotts">
        {Array(image.length)
          .fill()
          .map((_, i) => {
            if (i === index) {
              return show && <FiberManualRecordRounded className="dots" />;
            } else {
              return show && <FiberManualRecordOutlined className="dots" />;
            }
          })}
      </div>


          <div className="search">
        {/* {
          Data.filter((val) =>{
            if(searchItem ==""){
              return val;
            }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
              return val;
            }
          })
        } */}

          </div>

      <Link to={`/Data/${keys}`}>
        <div className="card_in card_image">
          <img
            onMouseOver={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            src={image[index]}
            alt="image"
          />
        </div>
      </Link>
      <div className="productDetail">
        <div className="card_in card_details">
          <p className="title">adidas</p>
          <p className="feature">
            <Link className="feature" to={`/Data/${keys}`}>
              {name}
            </Link>
          </p>
          <span className="offerprice">₹{offerPrice}</span>
          <span className="actualprice">₹{actualPrice}</span>
          <span className="discount">56% off</span>
        </div>
        <div className="review">
          <div className="rev-rating">
            <Rating value={rating} />
          </div>
          <div className="rev-p">
            <p>{reviews} reviews</p>
          </div>
        </div>
        <div className="card_in card_size">
          <p>
            size <span>6,7,8,9</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
