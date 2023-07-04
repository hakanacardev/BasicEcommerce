import { Dispatch, SetStateAction, createContext, useContext, useState } from "react";
interface ContextType {
    language: string;
    setLanguage: Dispatch<SetStateAction<string>>
}
const Context = createContext<ContextType | null>(null);
interface Iprops {
    children: JSX.Element
}
const AccountProvider = ({ children }: Iprops) => {
    const [language, setLanguage] = useState("TR")

    const data: ContextType = {
        language,
        setLanguage
    }

    return (
        <Context.Provider value={data}>
            {children}
        </Context.Provider>
    )
}

export const useAccount = () => useContext(Context) as ContextType

export default AccountProvider
