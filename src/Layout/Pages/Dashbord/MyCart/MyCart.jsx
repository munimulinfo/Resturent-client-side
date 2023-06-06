import React from 'react';
import { Helmet } from 'react-helmet-async';
import useCart from '../../../../Hooks/useCart'
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { FaRegTrashAlt } from 'react-icons/fa';
import './MyCart.css'
import Swal from 'sweetalert2';
const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart?.reduce((sum, item) => item.price + sum, 0);
   const handleDeletItems = (id) => {
    console.log(id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        fetch()
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${id}`,{
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }else{
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'question'
                      )
                }
               
            })
         
        }
      })
   };

    return (
        <div className='flex flex-col justify-center items-center'>
            <Helmet>
                <title>NISSAN BOSS|my-cart</title>
            </Helmet>
            <SectionTitle
                subHeading={"---My Cart---"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className="uppercase flex gap-6 jutify-center items-center mb-4">
                <h1 className='text-3xl font-semibold'>Total items : {cart?.length}</h1>
                <h1 className='text-3xl font-semibold'>total price : ${total}</h1>
                <button className="btn btn-sm w-20 bg-[#D1A054] border-0">pay</button>
            </div>
            <div className="overflow-x-auto w-full px-6">
                <table className="table w-full">
                    {/* head */}
                    <thead className=''>
                        <tr className='bg-head'>
                            <th>sl</th>
                            <th>item image</th>
                            <th>item name</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item, index) => <tr
                                key={item?._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded">
                                            <img src={item?.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>{item?.name}</td>
                                <td>{item?.price}</td>
                                <td>
                                    <button onClick={() => handleDeletItems(item?._id)} className='bg-red-500 w-10 rounded text-white p-2'>
                                        <FaRegTrashAlt className=' text-2xl' />
                                    </button>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;