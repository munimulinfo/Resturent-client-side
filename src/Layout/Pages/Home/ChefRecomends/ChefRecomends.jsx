import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

const ChefRecomends = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const chefRecomends = data?.filter(recomend => recomend?.category === 'dessert')
                setMenu(chefRecomends);
            })

    }, [])
    return (
        <div className='mb-24'>
            <SectionTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>
            <div className='grid md:grid-cols-3 gap-6'>
                {
                    menu.map(item => <div key={item?._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                        <img src={item?.image} alt="food" className=" w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className=" text-2xl font-bold">{item?.name}</h2>
                            <p className='text-[16px]'>{item?.recipe}</p>
                            <div className="card-actions mt-4">
                            <button className="btn btn-outline border-0 border-b-4 shadow-xl border-yellow-500 ">Add TO CART</button>
                            </div>
                        </div>
                    </div>
                    )}
            </div>

        </div>
    );
};

export default ChefRecomends;