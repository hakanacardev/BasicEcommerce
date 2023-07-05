import React, { useState } from 'react';
import './App.css';
import ApiProvider from './api/ApiProvider';
import Router from './components/Router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AccountProvider from './context/AccountContext';
import ItemContext from './context/ItemContext';

function App() {

  return (
    <AccountProvider>
      <ItemContext>

        <ApiProvider>
          <ToastContainer position="bottom-left" autoClose={2000} />
          <Router />
        </ApiProvider>
      </ItemContext>

    </AccountProvider>

  );
}

export default App;
