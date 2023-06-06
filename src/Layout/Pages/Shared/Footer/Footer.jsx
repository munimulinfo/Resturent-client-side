import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="flex text-neutral-content w-full">

                <div className='bg-[#1F2937] w-full flex flex-col justify-center items-center px-20 py-16 '>
                    <h1 className='text-3xl font-semibold mb-6'>CONTACT US</h1>
                    <p className='text-[20px] mb-1'>123 ABS Street, Uni 21, Bangladesh</p>
                    <p className='text-[20px] mb-1'>+88 123456789</p>
                    <p className='text-[20px] mb-1'>Mon - Fri: 08:00 - 22:00</p>
                    <p className='text-[20px] mb-1'>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className='bg-[#111827] w-full flex flex-col justify-center items-center px-20 py-16'>
                    <h1 className='text-3xl mb-6 font-semibold'>Follow US</h1>
                    <p className='text-[20px] mb-8'>Join us on social media</p>
                    <h1 className='flex gap-8 text-3xl'>
                        <FaFacebook></FaFacebook>
                        <FaInstagram></FaInstagram>
                        <FaTwitter></FaTwitter>
                    </h1>

                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-black text-white w-full">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;