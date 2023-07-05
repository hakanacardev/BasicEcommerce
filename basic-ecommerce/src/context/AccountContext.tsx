import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";
import "../i18n"
import i18n from "../i18n";
interface ContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>
    user: any;
    setUser: Dispatch<SetStateAction<object>>
}
const Context = createContext<ContextType | null>(null);
interface Iprops {
    children: JSX.Element
}
const AccountProvider = ({ children }: Iprops) => {

    const [language, setLanguage] = useState("TR")
    const [user, setUser] = useState([])
    console.log('user', user)
    const data: ContextType = {
        language,
        setLanguage,
        user,
        setUser
    }
    useEffect(() => {

        i18n.changeLanguage(language)

    }, [language])


    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAccount = () => useContext(Context) as ContextType

export default AccountProvider
