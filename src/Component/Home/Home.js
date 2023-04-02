import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Blog from '../Blog/Blog';
import Brands from '../Brands/Brands';
import DisplaySection from '../DisplaySection/DisplaySection';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import TopSell from '../TopSell/TopSell';
import "./Home.css";

const Home = () => {

    return (
        <div>
            <Header />
            <Navbar />
            <DisplaySection />
            <FeatureProducts />
            <Advertisement />
            <TopSell />
            <Blog />
            <Brands />
            <Footer/>
        </div>
    );
};

export default Home;