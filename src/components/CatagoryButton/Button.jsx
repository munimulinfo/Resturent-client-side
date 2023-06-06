import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({text,  pageTitle}) => {
    console.log(pageTitle);
    return (
        <div className='flex justify-center items-center my-10'>
           
         <Link to={`/orders/${pageTitle}`}><button className="btn btn-outline border-0 border-b-4 border-yellow-600 text-yellow-600">{text}</button></Link>
        </div>
    );
};

export default Button;