import { Button } from '@mui/material';
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Location from "../../Icons/Location.svg"
import './itemlist.css';
import { useItem } from '../../context/ItemContext';

interface Iprops {
    title: string;
    desc: string;
    rating: number;
    distance: number;
    key: number
    imageUrl: string;
    onClick: () => void
}
const ItemList = (props: Iprops) => {

    return (
        <div className='Item' key={props.key}>
            <img width={70} height={70} style={{ borderRadius: '16px' }} src={props.imageUrl} />
            <div className='ItemDetail' >
                <b>{props.title}</b>
                <label>{props.desc}</label>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StarRoundedIcon sx={{ color: '#ECD03F' }} />
                        <label>{props.rating}</label>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src={Location} />
                        <label>{props.distance}</label>
                    </div>
                </div>
                <Button onClick={props.onClick} variant="text">Sepete Ekle</Button>

            </div>

        </div>
    )

}
export default ItemList