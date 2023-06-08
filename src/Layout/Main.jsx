import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <div className='container mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;