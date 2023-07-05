import React, { memo } from 'react';
import './header.css';
import Battery from "../../Icons/Battery.svg"
import Wifi from "../../Icons/Wifi.svg"
import Connect from "../../Icons/Connect.svg"
function Header() {
    return (
        <div className='Header'>
            <div className='Time'>9:41</div>
            <div className='StatusBar'>
                <img src={Battery} />
                <img src={Wifi} />
                <img src={Connect} />
            </div>
        </div>
    )

}
export default memo(Header)