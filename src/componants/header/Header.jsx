import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Header.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MoreTippy from "./More_dropDown/MoreTippy";
import LoginTippy from "./Login_dropDown/LoginTippy";
import "tippy.js/themes/light.css";
import "tippy.js/animations/perspective.css";
import "tippy.js/animations/scale.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const [searchItem, setSearchItem] = useState('');

  const Sitem = [...searchItem]
  localStorage.setItem('searchData', JSON.stringify(Sitem))



  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);

  const [cartsize, setCartsize] = useState(0)

  
    // console.log(cart.length);

    useEffect(()=>{
      let cart = JSON.parse(localStorage.getItem("cart"));
      if (cart) {
      console.log(cart);
      setCartsize(cart.length)
      // window.location.reload()  
    }
  },[])
  useEffect(() => {
    const showvalue = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => {
      clearTimeout(showvalue);
    };
  }, [show]);

  const handleOpen = () => {
    setOpen(true);
  };

  // const ShowLogin = () => {
  //   return (
  //     <>
  //       <div className="showLogin">
  //         <div className="showLogin__button">
  //           <button>LOGIN</button>
  //         </div>
  //         <div className="showLogin__info">
  //           <div>
  //             <p>New customer?</p>
  //           </div>
  //           <div>
  //             <p style={{ color: "#2874f0" }}>Sign Up</p>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   );
  // };

  return (
    <div className="header">
      <div
        className="header_first"
        onClick={() => {
          window.location.href = `/`;
        }}
      >
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
          alt="Flipkart_logo"
        />
        <div className="header_first1">
          <span
            style={{
              fontSize: "11px",
              color: "white",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Explore
          </span>
          <span
            style={{
              color: "#f9e107",
              fontSize: "11px",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
          >
            Plus
          </span>
          <span>
            <img
              width="10"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="Plus"
            />
          </span>
        </div>
      </div>

      <div className="header_second">
        <input placeholder="Search for products, brands and more" type="text" onChange={(event) =>{setSearchItem(event.target.value)}}/>
        <SearchIcon className="searchIcon" />
      </div>

      <div className="header_third">
        <button onClick={handleOpen}>
          <Tippy
            theme="light"
            content={<LoginTippy />}
            interactive={true}
            animation="scale"
          >
            <button className="btn">Login</button>
          </Tippy>
        </button>
      </div>

      <div className="header_fourth">
        <Tippy
          theme="light"
          content={<MoreTippy />}
          interactive={true}
          offset={[0, 18]}
          animation="perspective"
        >
          <p className="tp">More</p>
        </Tippy>
        <ExpandMoreIcon />
      </div>

      <div onClick={() => navigate("/cart")} className="header_fifth">
        <img src={"/image/cart_icon.png"} alt="logo" />
        <p>Cart</p>
        <span className="badge">{cartsize}</span>
      </div>
    </div>
  );
};

export default Header;
