import React, { useState, useEffect } from "react";
import { useFirebase } from "../../Context/FirebaseContext";
import { useNavigate } from "react-router-dom";
import "./LoginSite.css";

const LoginSite = () => {
  const firebase = useFirebase();
  console.log(firebase);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // creating an object of navigation...
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn) {
      navigate("/");
    }
  }, [firebase, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("login in a user");
    const result = await firebase.signinUserWithEmailAndPass(email, password);
    console.log("Login Success", result);
  };

  return (
    <div className="mainContainer">
      <div className="container">
        <div className="heading">Login</div>
        <div className="Login_container">
          <div className="email_section" controlId="formBasicEmail">
            <div className="email1">Email address</div>
            <input
              className="email2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div className="password_section" controlId="formBasicPassword">
            <div className="pass1">Password</div>
            <input
              className="pass2"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
            />
          </div>
          <button className="loginbtn" type="submit" onClick={handleSubmit}>
            Login
          </button>
        </div>
        <h1 className="OR">OR</h1>
        <button className="google_button" onClick={firebase.signInWithGoogle}>
          Signin with Google
        </button>
      </div>
    </div>
  );
};

export default LoginSite;
