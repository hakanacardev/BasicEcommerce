import React, { memo } from 'react';
import './card.css';
import { useTranslation } from "react-i18next";
import { Button } from '@mui/material';
import { useItem } from '../../context/ItemContext';
const Card = () => {
    const { t } = useTranslation();
    const { itemCart, setItemCart, addToCart } = useItem()
    const sumTotal = arr =>
        arr.reduce((sum, { price, count }) => sum + price * count, 0)

    const total = sumTotal(itemCart)
    const taxandcargo = ((total * 0.05) + 20).toFixed(2)
    const grandtotal = +total + +taxandcargo
    console.log('total', total)
    return (
        <div className='Card'>
            <h2 style={{ margin: '5px 0px' }}>{t("ItemTotal")}:</h2>
            <label>{t("Total")}: {total} TL</label>
            <label>{t("TaxandCargo")}: {taxandcargo} TL</label>
            <h4 >{t("GrandTotal")}: {grandtotal} TL</h4>
        </div>
    )

}
export default memo(Card) 