import React from 'react';
import './Footer.css'
import Browser from "@iconscout/react-unicons/icons/uil-browser";
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Calling from '@iconscout/react-unicons/icons/uil-calling';


const footer = () => {
  return (
    <div className='footer'>
        <div className='f-icons'>

        <div className="call">
          <div>
            <Calling />
          </div>
          <div>
            <span>Toll Free 1800 200 1234</span>
          </div>
        </div>

        <div className="facebook">
          <div>
            <Facebook />
          </div>
          <div>
           <a href="www.facebook.com/cripumps"><span>www.facebook.com/cripumps</span></a> 
          </div>
        </div> 
        
        <div className="browser">
          <div>
            <Browser />
          </div>
          <div>
            <a href="www.crigroups.com" target= "_blank"> <span>www.crigroups.com</span></a>
          </div>
        </div>

        </div>
      </div>

  
  )
}

export default footer