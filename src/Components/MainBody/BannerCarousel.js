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
        img: "https://img.freepik.com/free-photo/couple-doing-family-therapy_23-2149305192.jpg?w=1060&t=st=1668096472~exp=1668097072~hmac=87c2a79800eadcf424f3460515d531293cd62e7d5cc433f6263984fe72eb733e",
      },
      {
        img: "https://img.freepik.com/free-photo/appointment-psychologist_144627-39523.jpg?w=1060&t=st=1668096547~exp=1668097147~hmac=11e717b9c1335a31cbc3a030ca8a7ed374cf20d579db2391c53e05978b44d54b",
      },
      {
        img: "https://cdn.pixabay.com/photo/2014/03/12/18/34/family-286229_960_720.jpg",
      },
    ];
    return (
      <div>
        <Slider {...settings}>
          {bannerImg.map((img) => (
            <Banner img={img}></Banner>
          ))}
        </Slider>
        {/* <Banner></Banner> */}
      </div>
    );
};

export default BannerCarousel;