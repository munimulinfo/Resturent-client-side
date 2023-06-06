import React from 'react';
import Banner from './Home/Banner/Banner';
import Catagory from './Home/Catagory/Catagory';
import Description from './Home/Description/Description';
import Popularmenu from './Home/PopularMenu/Popularmenu';
import Featured from './Home/Featured/Featured';
import Testimonials from './Home/Testimonials/Testimonials';
import ChefRecomends from './ChefRecomends/ChefRecomends';
import Contact from './Home/Contact/Contact';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
          <Helmet>
            <title>NISSAN BOSS | Home</title>
          </Helmet>
          <Banner></Banner>
          <Catagory></Catagory>
          <Description></Description>
          <Popularmenu></Popularmenu>
          <Contact></Contact>
          <ChefRecomends></ChefRecomends>
          <Featured></Featured>
          <Testimonials></Testimonials>
        </div>
    );
};

export default Home;