import React, { useState } from 'react';
import './App.css';
import ApiProvider from './api/ApiProvider';
import Router from './components/Router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
 
  return (
    <ApiProvider>
      <ToastContainer position="bottom-left" autoClose={2000} />
      <Router />
    </ApiProvider>
  );
}

export default App;
