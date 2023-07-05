import { Button } from '@mui/material';
import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Location from "../../Icons/Location.svg"
import './mycart.css';
import { useItem } from '../../context/ItemContext';

interface Iprops {
    title: string;
    desc: string;
    key: number
    imageUrl: string;
    count: number
    decrease: () => void
    increase: () => void
    remove: () => void
}
const MyCartComponent = (props: Iprops) => {

    return (
        <div className='Item' key={props.key}>
            <img width={70} height={70} style={{ borderRadius: '16px' }} src={props.imageUrl} />
            <div className='ItemDetail' >
                <b>{props.title}</b>
                <label>{props.desc}</label>
                <label>Bu üründen {props.count} adet var.</label>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5px' }}>
                    <Button onClick={props.decrease} variant='outlined'> - </Button>
                    <Button onClick={props.remove} variant='text'>Çıkar</Button>
                    <Button onClick={props.increase} variant='outlined'> + </Button>
                </div>

            </div>

        </div>
    )

}
export default MyCartComponent