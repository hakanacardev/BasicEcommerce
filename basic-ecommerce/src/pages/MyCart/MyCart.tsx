import React, { useEffect, useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import "./mycart.css"
import { useItem } from '../../context/ItemContext';
import MyCartComponent from '../../components/MyCart/MyCartComponent';

const MyCart = () => {
    const { itemCart, setItemCart, addToCart, increase, decrease, removeFromCart } = useItem()

    console.log('itemcart', itemCart)


    return (
        <ProductTemplate>
            <div className='Wrapper'>
                <div className='ItemList' >

                    {
                        itemCart.map((v: any, i: any) => {
                            return (
                                <MyCartComponent
                                    desc={v.desc}
                                    count={v.count}
                                    imageUrl={v.image}
                                    title={v.title}
                                    key={v.id}
                                    decrease={() => decrease(v.id)}
                                    increase={() => increase(v.id)}
                                    remove={() => removeFromCart(v.id)}
                                />

                            )
                        })
                    }
                </div>

            </div>
        </ProductTemplate>
    )
}
export default MyCart