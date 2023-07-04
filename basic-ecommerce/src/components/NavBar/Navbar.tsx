import React from 'react';
import './navbar.css';
import List from "../../Icons/List.svg"
import Account from "../../Icons/Account.svg"
function Navbar() {
    return (
        <div className='Footer'>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <img src={List} />
                List
            </div>
            <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                <img src={Account} />
                List
            </div>
        </div>
    )

}
export default Navbar