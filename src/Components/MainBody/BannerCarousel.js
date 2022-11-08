import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from './Banner';
import Slider from 'react-slick';

const BannerCarousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
        slidesToScroll: 1,
      autoplay:true,
    };
    const bannerImg = [
      {
        img: "https://cdn.pixabay.com/photo/2014/03/12/18/34/family-286229_960_720.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2014/03/12/18/34/family-286229_960_720.jpg",
      },
      {
        img: "https://cdn.pixabay.com/photo/2014/03/12/18/34/family-286229_960_720.jpg",
      },
    ];
    return (
      <div>
        <Slider {...settings}>
          {bannerImg.map((ban) => (
            <Banner></Banner>
          ))}
        </Slider>
        {/* <Banner></Banner> */}
      </div>
    );
};

export default BannerCarousel;