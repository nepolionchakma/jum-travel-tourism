import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import ChooseTour from '../ChooseTour/ChooseTour';
import HomeOffers from '../HomeOffers/HomeOffers';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <HomeOffers></HomeOffers>
            <ChooseTour></ChooseTour>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;