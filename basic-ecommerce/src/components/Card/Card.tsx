import React from 'react';
import './card.css';
import { useTranslation } from "react-i18next";
import { Button } from '@mui/material';
const Card = () => {
    const { t } = useTranslation();

    return (
        <div className='Card'>
            <h2 style={{ margin: '5px 0px' }}>{t("ItemTotal")}:</h2>
            <label>{t("Total")}: 214.45 TL</label>
            <label>{t("TaxandCargo")}: 30 TL</label>
            <h4 >{t("GrandTotal")}: 244.45 TL</h4>
        </div>
    )

}
export default Card