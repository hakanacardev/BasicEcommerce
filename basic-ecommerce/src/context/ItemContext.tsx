import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
interface ContextType {
    itemCart: string[];
    setItemCart: Dispatch<SetStateAction<string[]>>
    addToCart: any,
    increase: any,
    decrease: any,
    removeFromCart
}
const Context = createContext<ContextType | null>(null);
interface Iprops {
    children: JSX.Element
}
const ItemContext = ({ children }: Iprops) => {
    const [itemCart, setItemCart] = useState([])
    //sepete ürün ekler  
    const addToCart = (item: any) => setItemCart(itemCart.find(v => v.id === item.id)
        ? itemCart.map((v: any) => v.id === item.id ? { ...v, count: v.count + 1 } : v)
        : [...itemCart, { ...item, count: 1 }]
    )
    //sepetten ürün çıkartır
    const removeFromCart = (id: any) => setItemCart(itemCart.filter(v => v.id !== id))

    //sepette ki ürünü arttırır

    const increase = (id: any) => {
        setItemCart(itemCart.map(v => v.id === id ? { ...v, count: v.count + 1 } : v))
    }
    //sepetten 1 ürün çıakrtır. 1 ürün kalıncaya kadar devam eder.

    const decrease = (id: any) => {
        setItemCart(itemCart.map(v => v.id === id ? { ...v, count: v.count > 1 ? v.count - 1 : 1 } : v))
    }
    return (
        <Context.Provider value={{ itemCart, setItemCart, addToCart, increase, decrease, removeFromCart }}>
            {children}
        </Context.Provider>
    )
}

export const useItem = () => useContext(Context) as ContextType

export default ItemContext
