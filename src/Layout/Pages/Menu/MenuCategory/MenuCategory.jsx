import React from 'react';
import MenuItem from "../../Shared/MenuItem/MenuItem"
import Cover from '../../Shared/Cover/Cover';
const MenuCategory = ({ items, pageTitle, img, pageText, height}) => {
    return (
        <div className='mb-12'>
            {pageTitle && <Cover img={img} pageTitle={pageTitle} pageText={pageText} height={height}></Cover>}
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    items?.map(item => <MenuItem
                        key={item?._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;