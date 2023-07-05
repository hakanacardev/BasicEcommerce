import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/SignUp/SignUp';
import List from '../pages/List/List';
import Account from '../pages/Account/Account';
import MyCart from '../pages/MyCart/MyCart';

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignUp />} />
                <Route path="list" element={<List />} />
                <Route path="account" element={<Account />} />
                <Route path="mycart" element={<MyCart />} />
            </Routes>
        </BrowserRouter >
    )
}

export default Router;