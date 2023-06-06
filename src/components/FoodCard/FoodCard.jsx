import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
const FoodCard = ({ item }) => {
    const { name, _id, image, price, recipe } = item || {}
    const { user } = useContext(AuthContext);
    const [,refetch] = useCart();
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(user);
    const handleAddToCart = (item) => {
        if (user && user?.email) {
            const cartItem = { menuItemId: _id, name, price, image, email: user?.email };
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            title: 'Product added successfull to cart',
                            icon: 'success',
                        })
                    }
                })
        } else {
            Swal.fire({
                title: "First, log in or you won't be able to add products to the cart.?",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#008000',
                cancelButtonColor: '#FFA500',
                confirmButtonText: 'Login now!'
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login',{state:{from: location}})
                    }
                })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className='relative'>
                <img src={item?.image} alt="food" className="w-full" />
                <h1 className='absolute top-5 right-5 bg-black text-yellow-600 py-1 px-3 rounded'>${item?.price}</h1>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className=" text-2xl font-bold">{name}</h2>
                <p className='text-[16px]'>{recipe}</p>
                <div className="card-actions mt-4">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 shadow-xl border-yellow-500 ">Add TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard