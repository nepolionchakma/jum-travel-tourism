import React from 'react';
import Banner from '../Banner/Banner';
import Blog from '../Blog/Blog';
import ChooseTour from '../ChooseTour/ChooseTour';
import HomeOffers from '../HomeOffers/HomeOffers';
import SpecialOffers from '../SpecialOffers/SpecialOffers';
import WorkingExperiences from '../WorkingExperiences/WorkingExperiences';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <SpecialOffers></SpecialOffers>
            <HomeOffers></HomeOffers>
            <ChooseTour></ChooseTour>
            <Blog></Blog>
            <WorkingExperiences></WorkingExperiences>
        </div>
    );
};

export default Home;