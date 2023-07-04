import React from 'react';
import './navbar.css';
import List from "../../Icons/List.svg"
import Account from "../../Icons/Account.svg"
import { Link } from 'react-router-dom';
function Navbar() {
    return (
        <div className='Footer'>
            <Link to="/list">
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <img src={List} />
                    List
                </div>
            </Link>
            <Link to="/account">
                <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
                    <img src={Account} />
                    Account
                </div>
            </Link>

        </div>
    )

}
export default Navbar