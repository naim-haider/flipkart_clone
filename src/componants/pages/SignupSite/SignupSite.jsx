import React, {useState, useEffect} from 'react'
import { useFirebase } from '../../Context/FirebaseContext'
import { useNavigate } from 'react-router-dom'

const SignupSite = () => {
    const firebase = useFirebase();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        if(firebase.isLoggedIn){
            navigate('/')
        }
    },[firebase, navigate])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log('signUp Success');
        await firebase.signupUserWithEmailAndPass(email, password)
    }

    console.log(firebase);
  return (
    <div className="mainContainer">
      <div className="container">
        <div className="heading">SignUp</div>
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
            Create Account
          </button>
        </div>
        <h1 className="OR">OR</h1>
        <button className="google_button" onClick={firebase.signInWithGoogle}>
          Signup with Google
        </button>
      </div>
    </div>
  )
}

export default SignupSite;
