import React from 'react';
import logo from './logo.svg';
import './App.css';
import Battery from "./Icons/Battery.svg"
import Wifi from "./Icons/Wifi.svg"
import Connect from "./Icons/Connect.svg"
import List from "./Icons/List.svg"
import Account from "./Icons/Account.svg"
import Star from "./Icons/Star.svg"
import Location from "./Icons/Location.svg"
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
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
            <img src={List} />
            List
          </div>
          <div style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
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
          <h2>İsim Soyisim</h2>
          <p>E-mail: e-mail buraya yazılacak</p>
          <p>Password: password buraya yazılacak</p>
          <p>Current Locale: dil buraya yazılacak</p>
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
            variant="outlined">Log Out</Button>

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
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div style={{ display: 'flex', width: '100%', flexDirection: 'row', }}>
            <img width={70} height={70} style={{ backgroundColor: "red", borderRadius: 16 }} />
            <div style={{ display: 'flex', flexDirection: 'column',marginLeft:10 }}>
              <b>Hakan ACAR</b>
              <label>açıklaması buraya gelecek</label>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                <div style={{ alignItems: 'center' }}>
                  <img src={Star}  />
                  <label>3.9</label>
                </div>
                <div style={{ alignItems: 'center' }}>
                  <img src={Location} />
                  <label>3.9</label>
                </div>
              </div>

            </div>
          </div>
          <div className='Calculate'>
            <h2>Ürünlerin Toplamı:</h2>
            <label>Toplam: 214.45 TL</label>
            <label>Vergiler ve Kargo: 30 TL</label>
            <h4>Genel Toplam: 244.45 TL</h4>
          </div>



        </div>

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
      </div>
    </div >
  );
}

export default App;
