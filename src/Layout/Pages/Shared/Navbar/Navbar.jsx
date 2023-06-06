import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../../../Hooks/useCart';
const Navbar = () => {
  const {user, logOut} =  useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOUt = () => {
    logOut()
    .then(result => {
        const logout = result.user;
        console.log(logout);
    })
    .catch(error => {
        console.log(error);
    })

  }
    const navOptions = <>
           <li><Link>Home</Link></li>
           <li><Link>CONTACT us</Link></li>
           <li><Link to='/dashboard/mycart'>DASHBOARD</Link></li>
           <li><Link to='/ourmenu'>Our Menu</Link></li>
           <li><Link to= '/orders/salad'>Our Shop</Link></li>
           <li><Link to= '/secret'>Secret</Link></li>
           <li><Link to='/dashboard/mycart'>
               <div className='indicator'>
                <div className='indicator-item indicator-bottom'>
                <div className="rounded-full px-2 py-1 bg-red-500 text-white">+{cart?.length || 0}</div>
                </div>
                <FaShoppingCart className='text-4xl  text-lime-500'>
                </FaShoppingCart>
               </div>
            
            </Link></li>
           {
            user ? <><li><Link onClick={handleLogOUt}>Logout</Link></li></> : <> <li><Link to= '/login'>Login</Link></li>
            <li><Link to= '/singup'>SignUp</Link></li></>
           }  
    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-40 bg-black max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                           {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                       {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a>Get started</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;