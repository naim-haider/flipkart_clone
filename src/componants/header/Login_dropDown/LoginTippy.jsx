import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StoreIcon from '@mui/icons-material/Store';
import './LoginTippy.css'
import { Link } from 'react-router-dom';

const LoginTippy = () => {
  return (
    <div className='loginT'>
      <div className="loginT_in loginT_first">
        <Link className="newcustomer" to={'/signup'}>New Customer?</Link>
        <Link className="signIn" to={'/loginSite'} style={{color: '#2874f0'}}>Sign In</Link>
      </div>

      <hr />

      <div className="loginT_in">
        <AccountCircleIcon/>
        <p>My Profile</p>
      </div>

      <hr />

      <div className="loginT_in">
        <img src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png" alt="plus" />
        <p>Flipkart Plus Zone</p>
      </div>

      <hr />

      <div className="loginT_in">
        <StoreIcon/>
        <p>Orders</p>
      </div>

      <hr />

      <div className="loginT_in">
        <FavoriteIcon/>
        <p>Wishlist</p>
      </div>

      <hr />

      <div className="loginT_in">
        <ConfirmationNumberIcon/>
        <p>Rewards</p>
      </div>

      <hr />

      <div className="loginT_in">
        <CardGiftcardIcon/>
        <p>Gift Cards</p>
      </div>
    </div>
  )
}

export default LoginTippy
