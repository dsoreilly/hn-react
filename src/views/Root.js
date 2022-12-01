/** @format */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RootView() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <div className="container mx-auto flex grow flex-col">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default RootView;
