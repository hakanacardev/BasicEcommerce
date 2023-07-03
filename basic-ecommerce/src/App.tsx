import React from 'react';
import logo from './logo.svg';
import './App.css';
import Battery from "./Icons/Battery.svg"
import Wifi from "./Icons/Wifi.svg"
import Connect from "./Icons/Connect.svg"
import List from "./Icons/List.svg"
import Account from "./Icons/Account.svg"
import { Button, MenuItem, Select, TextField } from '@mui/material';
function App() {
  return (
    <div className="App">
      <div className='Layout'>
        <div className='Header'>
          <div className='Time'>9:41</div>
          <div className='StatusBar'>
            <img src={Battery} />
            <img src={Wifi} />
            <img src={Connect} />
          </div>
        </div>
        <div className='Main'>
          <h3>Account</h3>
          <TextField style={{ width: '100%' }} label="E-mail" variant="standard" />
          <TextField style={{ width: '100%' }} label="Password" variant="standard" />
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

        <div className='Footer'>
          <div style={{ alignItems: 'center', width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src={List} />
            List
          </div>
          <div style={{ alignItems: 'center', width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src={Account} />
            List
          </div>
        </div>
      </div>
      <div className='Layout'>
        <div className='Header'>
          <div className='Time'>9:41</div>
          <div className='StatusBar'>
            <img src={Battery} />
            <img src={Wifi} />
            <img src={Connect} />
          </div>
        </div>
        <div className='Main'>
          <h3>Account</h3>
          <TextField style={{ width: '100%' }} label="E-mail" variant="standard" />
          <TextField style={{ width: '100%' }} label="Password" variant="standard" />
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

        <div className='Footer'>
          <div style={{ alignItems: 'center', width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src={List} />
            List
          </div>
          <div style={{ alignItems: 'center', width: '50%', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src={Account} />
            List
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
