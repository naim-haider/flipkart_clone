import { useEffect, useState } from "react";
import Header from "./componants/header/Header";
import alanBtn from "@alan-ai/alan-sdk-web";
import { Data } from "./componants/Data";
import Card from "./componants/cards/Card";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignupPage from "./componants/Signup/Signup";
import LoginSite from "./componants/pages/LoginSite/LoginSite";
import SignupSite from "./componants/pages/SignupSite/SignupSite";
import SingleProduct from "./componants/pages/SingleProduct/SingleProduct";
import './responsive.css';
import Cart from "./componants/pages/Cart/Cart";
import { useParams } from "react-router-dom";


const App = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    alanBtn({
      key: "71f3deff578def4b950b352e6f71f6282e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: ({ command, product }) => {
        // if (command === "firstCommant"){
        //   alert("firstcommand")
        // }
        // if (command === "shoe"){
        //   filter('shoe')
        // }
        // if (command === "shirt"){
        //   filter('shirt')
        // }
        // if (command === "pant"){
        //   filter('pant')
        // }
        // if (command === "skirt"){
        //   filter('skirt')
        // }
        // if (command === "short"){
        //   filter('short')
        // }
        // if (command === "sandal"){
        //   filter('sandal')
        // }

        // ----instead of doing the above code we can do the same thing dinamically----

        if (command === "show") {
          filter(product);
        }
        if (command === "cartPage") {
          navigate("/cart");
        }
        if (command === "ordersPage") {
          navigate("/orders");
        }
        if (command === "homePage") {
          navigate("/");
        }
      },
    });
    filter("");
  }, [navigate]);

  const filter = (names) => {
    // const filtered = Data.filter(function(item){
    //   if(item.name.includes(names)){
    //     return true
    //   }else return null
    // })

    const filtered = Data.filter((item) => item.name.includes(names));

    setCategory(filtered);
    // console.log(filtered);
  };

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route
          path="/"
          exact
          element={
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {category.map((item) => (
                <Card
                  key={item._id}
                  keys={item._id}
                  image={item.image}
                  name={item.name}
                  rating={item.rating}
                  reviews={item.reviews}
                  countInStock={item.countInStock}
                  actualPrice={item.actualPrice}
                  offerPrice={item.offerPrice}
                />
              ))}
            </div>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/loginSite" element={<LoginSite />} />
        <Route path="/signupSite" element={<SignupSite />} />
        <Route path="/Data/:id" element={<SingleProduct/>} />
        <Route path="/cart" element={<Cart/>} />

      </Routes>
    </div>
  );
}

export default App;
