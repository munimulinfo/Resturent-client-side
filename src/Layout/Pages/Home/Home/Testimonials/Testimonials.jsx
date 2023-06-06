import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import { FaCreativeCommonsBy } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    return (
        <div className='mb-24'>
            <SectionTitle
                subHeading={"---What Our Clients Say---"}
                heading={"TESTIMONIALS"}
            ></SectionTitle>
            <div>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews?.map(review => <SwiperSlide
                            key={review._id}>

                            <div className='flex flex-col justify-center items-center px-32'>
                                <Rating
                                 style={{ maxWidth: 180 }}
                                 value={review.rating}
                                 readOnly />
                                <p className='text-5xl font-bold text-pink-600 mt-4 '><FaCreativeCommonsBy/></p>
                                <p className='text-center py-8 font-sans font-semibold text-[18px]'>{review?.details}</p>
                                <h1 className='text-center text-3xl text-[#CD9003]'>{review?.name}</h1>
                            </div>
                        </SwiperSlide>)

                    }

                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;