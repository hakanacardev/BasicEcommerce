import React, { useEffect, useState } from 'react';
import ProductTemplate from '../../components/Template/ProductTemplate';
import "./list.css"
import { getItemsRequest } from '../../api/controllers/item-controller';
import ItemList from '../../components/ItemList/ItemList';

const List = () => {
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
                                />
                            )
                        })
                    }
                </div>
            </div>
        </ProductTemplate>
    )
}
export default List