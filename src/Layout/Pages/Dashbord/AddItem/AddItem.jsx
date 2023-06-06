import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
         formData.append('image', data.image[0])
         fetch(img_hosting_url,{
            method: 'POST',
            body: formData
         })
         .then(res => res.json())
         .then(imageResponse => {
            if(imageResponse.success){
                const imgURL = imageResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    reset();
                     if(data.data?.insertedId){
                        Swal.fire(
                            'Good job!',
                            'You clicked the button!',
                            'success'
                          )
                     }
                     console.log('after add a new data', data.data);
                })
            }
         })
    };
    return (
        <div className='px-24'>
            <Helmet>
                <title>Nissan Boss|add-item</title>
            </Helmet>
            <div>
                <SectionTitle
                    subHeading={"---What's new?---"}
                    heading={"ADD AN ITEM"}
                ></SectionTitle>

                <div className='px-14 py-14 bg-[#F3F3F3]'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe name*</span>
                            </label>
                            <input type="text" placeholder="Recipe name" {...register("name", { required: true})} className="input" />
                        </div>
                        <div className='flex gap-6'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">category*</span>
                                </label>
                                <select defaultValue={'pick one'}  {...register("category", { required: true })} className="select">
                                    <option>salad</option>
                                    <option>dessert</option>
                                    <option>pizza</option>
                                    <option>soup</option>
                                    <option>drinks</option>
                                    <option>popular</option>
                                    <option>offered</option>
                                </select>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Price*</span>
                                </label>
                                <input type="text" placeholder="Price" {...register("price", { required: true })} className="input " />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details*</span>
                            </label>
                            <textarea className="textarea h-24" placeholder="Recipe Details" {...register("recipe", { required: true})}></textarea>
                        </div>
                        <div className='form-control mt-4'>
                            <label className="label">
                                <span className="label-text">Item Image*</span>
                            </label>
                            <input type="file" {...register("image", { required: true})}  className="file-input bg-white  w-full max-w-xs" />
                        </div>
                        <div className="form-control mt-4">
                            <input type="submit" value="Add Item" className="bg-[#edb561] w-36 rounded-lg h-[50px] uppercase text-white text-xl text-bold" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;