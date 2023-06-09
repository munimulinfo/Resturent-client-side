import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img1 from '../../../../../assets/home/slide1.jpg';
import img2 from '../../../../../assets/home/slide2.jpg';
import img3 from '../../../../../assets/home/slide3.jpg';
import img4 from '../../../../../assets/home/slide4.jpg';
import img5 from '../../../../../assets/home/slide5.jpg';
import SectionTitle from '../../../../../components/SectionTitle/SectionTitle';
const Catagory = () => {
    return (
        <section>
            <SectionTitle
              heading={"ORDER ONLINE"}
              subHeading={"---From 11:00am to 10:00pm---"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="sliider" />
                    <h1 className='text-3xl  text-orange-500 uppercase absolute bottom-5  ml-20'>Salads</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="sliider" />
                    <h1 className='text-3xl text-orange-500 uppercase absolute bottom-5  ml-20'>pizza</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="sliider" />
                    <h1 className='text-3xl  text-orange-500 uppercase absolute bottom-5  ml-20'>shops</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="sliider" />
                    <h1 className='text-3xl  text-orange-500 uppercase absolute bottom-5  ml-20'>cake</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="sliider" />
                    <h1 className='text-3xl  text-orange-500 uppercase absolute bottom-5  ml-20'>vegitables</h1>
                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Catagory;