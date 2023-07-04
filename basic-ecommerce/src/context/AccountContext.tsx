import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
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

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAccount = () => useContext(Context) as ContextType

export default AccountProvider
