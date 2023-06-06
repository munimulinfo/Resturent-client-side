import { Helmet } from 'react-helmet-async';
import img from "../../../../assets/menu/banner3.jpg";
import img1 from "../../../../assets/menu/dessert-bg.jpeg";
import img2 from "../../../../assets/menu/pizza-bg.jpg";
import img3 from "../../../../assets/menu/salad-bg.jpg";
import img4 from "../../../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useMenu from '../../../../Hooks/useMenu';
import MenuCategory from '../MenuCategory/MenuCategory';
import Button from "../../../../components/CatagoryButton/Button"


const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu?.filter(item => item.category === "dessert");
    const salad = menu?.filter(item => item.category === "salad");
    const pizza = menu?.filter(item => item.category === "pizza");
    const soup = menu?.filter(item => item.category === "soup");
    const offered = menu?.filter(item => item.category === "offered");
    return (
        <div>
            <Helmet>
                <title>NISSAN BOSS|Menu</title>
            </Helmet>
            <div>
                <MenuCategory img={img} pageTitle={"OUR MENU"} pageText={"Would you like to try a dish?"} height={"750px"}></MenuCategory>
            </div>
             <div className='my-16'>
                <SectionTitle
                    subHeading={"---Don't miss---"}
                    heading={"TODAY'S OFFER"}
                ></SectionTitle>
                <div>
                    <MenuCategory items={offered}></MenuCategory>
                </div>
                <Button text={"ORDER YOUR FAVOURITE FOOD"} pageTitle={"dessert"}></Button>
              
            </div>
                <div>
                    <MenuCategory           
                        img={img1}
                        pageTitle={"dessert"}
                        pageText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        height={"600px"}
                    ></MenuCategory>
                </div>
                <div>
                    <MenuCategory items={dessert}></MenuCategory>
                </div>
                <Button text={"ORDER YOUR FAVOURITE FOOD"}  pageTitle={"dessert"}></Button>
            
                <div>
                    <MenuCategory
                        img={img2}
                        pageTitle={"pizza"}
                        pageText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        height={"600px"}
                    ></MenuCategory>
                </div>
                <div><MenuCategory items={pizza}></MenuCategory></div>
                <Button text={"ORDER YOUR FAVOURITE FOOD"}  pageTitle={"pizza"}></Button>
                <div>
                    <MenuCategory
                        img={img3}
                        pageTitle={"salad"}
                        pageText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        height={"600px"}
                    ></MenuCategory>
                </div>
                <div><MenuCategory items={salad}></MenuCategory></div>
                <Button text={"ORDER YOUR FAVOURITE FOOD"}  pageTitle={"salad"}></Button>
                <div>
                    <MenuCategory
                        img={img4}
                        pageTitle={"soup"}
                        pageText={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                        height={"600px"}
                    ></MenuCategory>
                </div>
                <div><MenuCategory items={soup}></MenuCategory></div>
                <Button text={"ORDER YOUR FAVOURITE FOOD"}  pageTitle={"soup"}></Button>
            </div>

    );
};

export default Menu;