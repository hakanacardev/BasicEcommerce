import React, { useEffect, useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import "./list.css"
import { getItemsRequest } from '../../api/controllers/item-controller';
import ItemList from '../../components/ItemList/ItemList';
import Card from '../../components/Card/Card';
import { useItem } from '../../context/ItemContext';
import { Button, TextField } from '@mui/material';
import CustomInput from '../../components/Custom/CustomInput';
import { Link } from 'react-router-dom';

const List = () => {
    const { itemCart, setItemCart, addToCart } = useItem()

    console.log('itemcart', itemCart)
    const [data, setData] = useState([])

    const getItems = async () => {

        try {
            let res = await getItemsRequest()
            if (res) {
                setData(res.data)

            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getItems()
    }, [])

    return (
        <ProductTemplate>
            <div className='Wrapper'>
                <Link to="/mycart">
                    <Button fullWidth variant='contained'>Sepetim</Button>
                </Link>
                <CustomInput />
                <div className='ItemList' >

                    {
                        data.map((v: any, i: any) => {
                            return (
                                <ItemList
                                    desc={v.desc}
                                    distance={v.distance}
                                    imageUrl={v.image}
                                    key={v.id}
                                    rating={v.rating}
                                    title={v.title}
                                    onClick={() => addToCart(v)}
                                />
                            )
                        })
                    }
                </div>
                <Card />

            </div>
        </ProductTemplate>
    )
}
export default List