import React, { useEffect } from 'react';
import PriceSection from '../PriceBox.js/PriceSection';
import ReviewSection from '../ReviewSection/ReviewSection';
import BannerCarousel from './BannerCarousel';
import FooterSection from './FooterSection';
import ServiceSection from './ServiceSection';

const MainPage = () => {
    useEffect(() => {
         document.title = "Mind Talking";
    },[])
    return (
      <div>
        <BannerCarousel></BannerCarousel>
        <ServiceSection></ServiceSection>
        <PriceSection></PriceSection>
        <ReviewSection></ReviewSection>
        <FooterSection></FooterSection>
      </div>
    );
};

export default MainPage;