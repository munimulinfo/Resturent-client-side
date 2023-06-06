import React from 'react';
import Cover from '../../Shared/Cover/Cover';
import img from '../../../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../../Hooks/useMenu';
import FoodCard from '../../../../components/FoodCard/FoodCard';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './Order.css'

const Orders = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [menu] = useMenu();
    const {category} = useParams();
    const dessert = menu?.filter(item => item.category === "dessert");
    const salad = menu?.filter(item => item.category === "salad");
    const pizza = menu?.filter(item => item.category === "pizza");
    const soup = menu?.filter(item => item.category === "soup");
    const drinks = menu?.filter(item => item.category === "drinks");

    const [active, setActive] = useState("");
    const clickactive = (nissan) => {
        setActive(nissan);
    }
    
    return (
        <div>
             <Helmet>
                <title>NISSAN BOSS|orders</title>
            </Helmet>
            <Cover
                pageTitle={"OUR SHOP"}
                pageText={"Would you like to try a dish?"}
                height={"750px"}
                img={img}
            ></Cover>
            <div>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="flex justify-center items-center gap-6 mb-16 mt-16">
                        <Tab onClick={()=>clickactive("jisan")} className={` altime ${active == 'jisan' ? 'active cursor-pointer' : ''}`}>salad</Tab>
                        <Tab onClick={() => clickactive("jiss")} className={` altime ${active == 'jiss' ? 'active  cursor-pointer' : ''}`}>pizza</Tab>
                        <Tab onClick={()=> clickactive("jis")} className={` altime ${active == 'jis' ? 'active  cursor-pointer' : ''}`}>soup</Tab>
                        <Tab onClick={()=> clickactive("ni")} className={` altime ${active == 'ni' ? 'active  cursor-pointer' : ''}`}>dessert</Tab>
                        <Tab onClick={()=> clickactive("ki")} className={` altime ${active == 'ki' ? 'active cursor-pointer ' : ''}`}>drinks</Tab>
                    </TabList>
                    <TabPanel>
                       <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Orders;