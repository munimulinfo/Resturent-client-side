import SectionTitle from '../../../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../../../Hooks/useMenu';
import Button from '../../../../../components/CatagoryButton/Button';

const Popularmenu = () => {
    const [menu] = useMenu();
    const popular = menu?.filter(item => item?.category === 'popular');
    return (
        <section className='mb-16'>
            <SectionTitle
                heading={"from our menu"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className='grid grid-cols-2 gap-4'>
                {
                    popular?.map(item => <MenuItem
                        key={item?._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            
                <Button
                    text={"view full menu"}
                ></Button>
            

        </section>
    );
};

export default Popularmenu;