import React from 'react';
import ReviewSection from '../ReviewSection/ReviewSection';
import BannerCarousel from './BannerCarousel';
import ServiceSection from './ServiceSection';

const MainPage = () => {
    return (
        <div>
            <BannerCarousel></BannerCarousel>
            <ServiceSection></ServiceSection>
            <ReviewSection></ReviewSection>
        </div>
    );
};

export default MainPage;