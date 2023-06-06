import React from 'react';
import { FaBook, FaUsers, FaBars, FaUtensils, FaSwatchbook, FaCalendarAlt, FaHome, FaEnvelope, FaMonero, FaUserAlt, FaShoppingBag, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import ActiveLink from './Pages/Shared/ActiveLink/ActiveLink';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';

const Dashbord = () => {
    const [cart] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu px-6 w-80  bg-[#D1A054] h-full text-base-content uppercase text-[17px]">
                        <h1 className='text-center text-2xl font-bold font-sans mb-16 mt-6 '>Nissan<br></br> Resturent</h1>
                        {
                            isAdmin ? <>
                                <li><ActiveLink to='/dashboard/userhome'><FaHome />Admin Home</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/additem'><FaUtensils />add items</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/paymenthistory'><FaBars />manage items</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/mycart'><FaBook />Manage bookings</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/allusers'><FaUsers />all users</ActiveLink></li>
                            </> : <>
                                <li><ActiveLink to='/dashboard/userhome'><FaHome />User Home</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/reservation'><FaCalendarAlt /> reservation</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/paymenthistory'><FaWallet></FaWallet> payment history</ActiveLink></li>
                                <li className='indicator'><ActiveLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart><span className='mr-3'>my cart</span>
                                    <span className='indicator-item indicator-middle badge badge-error text-white w-10'>+{cart?.length || 0}</span>
                                </ActiveLink></li>
                                <li><ActiveLink to='/dashboard/review'><FaUserAlt /> add review</ActiveLink></li>
                                <li><ActiveLink to='/dashboard/booking'><FaSwatchbook />my booking</ActiveLink></li>
                            </>
                        }
                        <hr className='mt-6 mb-4' />
                        <li><ActiveLink to='/'><FaHome></FaHome>Home</ActiveLink></li>
                        <li><ActiveLink to='/ourmenu'><FaMonero />Menu</ActiveLink></li>
                        <li><ActiveLink to='/orders/salad'><FaShoppingBag />Shop</ActiveLink></li>
                        <li><ActiveLink to='/contact'><FaEnvelope /> Contact</ActiveLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashbord;