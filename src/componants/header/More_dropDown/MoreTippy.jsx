import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GetAppIcon from '@mui/icons-material/GetApp';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import './MoreTippy.css'

const MoreTippy = () => {
  return (
    <div className='moreT'>
      <div className="moreT_in">
        <NotificationsIcon/>
        <p>Notification Preferences</p>
      </div>

      <hr />

      <div className="moreT_in">
        <MonetizationOnIcon/>
        <p>Sell on Flipkart</p>
      </div>

      <hr />

      <div className="moreT_in">
        <LiveHelpIcon/>
        <p>24*7 Customer Care</p>
      </div>

      <hr />

      <div className="moreT_in">
        <TrendingUpIcon/>
        <p>Advertise</p>
      </div>

      <hr />

      <div className="moreT_in">
        <GetAppIcon/>
        <p>Download App</p>
      </div>
    </div>
  )
}

export default MoreTippy
