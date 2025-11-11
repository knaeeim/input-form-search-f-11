import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import ContextProvider from '../Context/ContextProvider';

const RootLayOut = () => {
    return (
        <div>
            <ContextProvider>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </ContextProvider>
        </div>
    );
};

export default RootLayOut;