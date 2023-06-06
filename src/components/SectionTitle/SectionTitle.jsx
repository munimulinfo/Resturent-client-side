import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto py-8'>
             <h1 className=' text-orange-400 font-bold font-sans mb-2'>{subHeading}</h1>
             <h3 className=' text-4xl uppercase border-y-4 py-4  '>{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;