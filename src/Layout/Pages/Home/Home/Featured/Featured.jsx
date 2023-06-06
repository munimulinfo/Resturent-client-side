import React from 'react';
import SectionTitle from '../../../../../components/SectionTitle/SectionTitle';
import feautured from '../../../../../assets/home/featured.jpg'
import "./Featured.css"
const Featured = () => {
    return (
        <section className='bg-image bg-fixed md:flex flex-col justify-center items-center text-white pt-10 pb-24 mt-12'>
            <SectionTitle
                subHeading={"----Check it out"}
                heading={"Featured item"}
            ></SectionTitle>
            <div className='flex justify-center items-center gap-12 px-32 mt-12'>
                <img className='w-[600px]' src={feautured} alt="image" />
                <div>
                    <h1 className='text-2xl'>March 20 2023</h1>
                    <h1 className='text-2xl'>WHERE CAN I GET SOME?</h1>
                    <p className='text-[18px] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Error voluptate facere, deserunt dolores maiores quod nobis quas quasi.
                        Eaque repellat recusandae ad laudantium tempore consequatur consequuntur
                        omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 border-white text-white ">Read More</button>
                </div>
            </div>

        </section>
    );
};

export default Featured;