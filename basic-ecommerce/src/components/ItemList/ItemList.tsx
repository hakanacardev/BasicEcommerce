import { Button } from '@mui/material';
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Location from "../../Icons/Location.svg"
import './itemlist.css';

const ItemList = () => {
    return (
        <div className='ItemList'>
            <div className='Item' >
                <img />
                <div className='ItemDetail' >
                    <b>Hakan ACAR</b>
                    <label>açıklaması buraya gelecek</label>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <StarRoundedIcon sx={{ color: '#ECD03F' }} />
                            <label>3.9</label>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={Location} />
                            <label>3.9</label>
                        </div>
                    </div>
                    <Button variant="text">Sepete Ekle</Button>

                </div>
            </div>

        </div>
    )

}
export default ItemList