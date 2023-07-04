import React, { useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import "./account.css"
import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAccount } from '../../context/AccountContext';
import { Link } from 'react-router-dom';

const Account = () => {
    const { language, setLanguage, user, setUser } = useAccount()

    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };
    return (
        <ProductTemplate>
            <div className='Main'>
                <h3>Account</h3>
                <h2>{user.fullName}</h2>
                <p>E-mail: {user.email}</p>
                <p>Password: {user.password}</p>
                <p>Current Locale: {language === "TR" ? "Türkçe" : "English"}</p>
                <Select
                    labelId="demo-simple-select-label"
                    label="Locale"
                    value={language}
                    onChange={handleLanguageChange}
                    style={{ width: '100%' }}
                >
                    <MenuItem value={"TR"}>Türkçe</MenuItem>
                    <MenuItem value={"EN"}>İngilizce</MenuItem>
                </Select>
                <Link to="/">
                    <Button
                        onClick={() => setUser([])}
                        style={{ width: '100%' }}
                        variant="outlined">Log Out</Button>
                </Link>


            </div>
        </ProductTemplate>
    )
}
export default Account