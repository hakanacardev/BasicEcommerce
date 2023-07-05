import React, { useEffect, useMemo, useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import "./list.css"
import { getItemsRequest } from '../../api/controllers/item-controller';
import ItemList from '../../components/ItemList/ItemList';
import Card from '../../components/Card/Card';
import { useItem } from '../../context/ItemContext';
import { Button, TextField } from '@mui/material';
import CustomInput from '../../components/Custom/CustomInput';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const List = () => {
    const { t } = useTranslation();
    const { itemCart, setItemCart, addToCart } = useItem()
    const [search, setSearch] = useState("")
    console.log('itemcart', itemCart)
    const [data, setData] = useState([])
    const [filteredResults, setFilteredResults] = useState([])

    const getItems = async () => {

        try {
            let res = await getItemsRequest()
            if (res) {
                setData(res.data)
                setFilteredResults(res?.data)
            }
        } catch (error) {

        }
    }

    useEffect(() => {
        getItems()
    }, [])
    useMemo(() => {
        const filteredData = data.filter((v) => {
            return v.title.toLowerCase().includes(search.toLowerCase())
        })
        console.log(filteredData);
        setFilteredResults(filteredData)
    }, [search])

    return (
        <ProductTemplate>
            <div className='Wrapper'>
                <Link to="/mycart">
                    <Button fullWidth variant='contained'>{t("MyCart")}</Button>
                </Link>
                <CustomInput value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }} placeholder={t("Search")} />
                <div className='ItemList' >

                    {
                        filteredResults.map((v: any, i: any) => {
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