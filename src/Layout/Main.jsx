import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/Shared/Navber/Navber';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            {/* <div className='container mx-auto'> */}
                <Outlet></Outlet>
            {/* </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;