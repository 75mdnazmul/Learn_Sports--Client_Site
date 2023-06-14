import React from 'react';
import JoinUs from '../JoinUs/JoinUs';
import Subscribe from '../Subscribe/Subscribe';
import Banner from '../Banner/Banner';
import usePageTitleName from '../../../Hook/PageTitleName/PageTitleName';
import Slider from '../Slider/Slider';
import PopularCourses from '../Popularcourses/Popularcourses';

const Home = () => {
    usePageTitleName('Home page')
    return (
        <div>
            <Banner/>
            <Slider/>
            <PopularCourses></PopularCourses>
            <JoinUs />
            <Subscribe />
        </div>
    );
};

export default Home;