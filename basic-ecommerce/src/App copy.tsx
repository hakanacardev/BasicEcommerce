import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import List from "./Icons/List.svg"
import Account from "./Icons/Account.svg"
import Star from "./Icons/Star.svg"
import { Button, MenuItem, Select, TextField } from '@mui/material';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import CustomInput from './components/Custom/CustomInput';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Card from './components/Card/Card';
import ProductTemplate from './components/Template/ProductTemplate';

function App() {
  const defaultForm = {
    fullName: "",
    email: "",
    password: ""
  }
  const [form, setForm] = useState(defaultForm)
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <div className="App">
      <ProductTemplate>
        <div className='Main'>
          <h3>Account</h3>
          <CustomInput value={form.fullName} onChange={handleFormChange} name='fullName' label='Full  Name' />
          <CustomInput value={form.email} onChange={handleFormChange} name='email' label='E-mail' type='email' />
          <CustomInput value={form.password} onChange={handleFormChange} name='password' label="Password" type='password' />
          <Select
            labelId="demo-simple-select-label"
            label="Locale"
            value={"TR"}
            style={{ width: '100%' }}
          >
            <MenuItem value={"TR"}>Türkçe</MenuItem>
            <MenuItem value={"EN"}>İngilizce</MenuItem>
          </Select>
          <Button
            style={{ width: '100%' }}
            disabled
            variant="contained">Sing Up</Button>

        </div>
      </ProductTemplate>
    </div >
  );
}

export default App;
