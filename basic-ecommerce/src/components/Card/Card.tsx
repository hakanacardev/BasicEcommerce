import React from 'react';
import './card.css';

const Card = () => {
    return (
        <div className='Card'>
            <h2>Ürünlerin Toplamı:</h2>
            <label>Toplam: 214.45 TL</label>
            <label>Vergiler ve Kargo: 30 TL</label>
            <h4>Genel Toplam: 244.45 TL</h4>
        </div>
    )

}
export default Card