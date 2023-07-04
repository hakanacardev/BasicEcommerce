import { Button } from '@mui/material';
import React from 'react';
import './producttemplate.css';
import Header from '../Header/Header';
import Navbar from '../NavBar/Navbar';
interface Iprops {
    children: JSX.Element
}
const ProductTemplate = (props: Iprops) => {
    return (
        <div className='App'>
            <div className='Layout'>
                <Header />
                {props.children}
                <Navbar />
            </div>
        </div>

    )

}
export default ProductTemplate