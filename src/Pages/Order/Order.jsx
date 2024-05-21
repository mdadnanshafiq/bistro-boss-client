import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../Components/SectionTitle/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
// import FoodCard from "../../Components/SectionTitle/FoodCard/FoodCard";
import OrderTab from "./OrderTab";
// import { useParams } from "react-router-dom";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  //   const { category } = useParams();
  const drinks = menu.filter((item) => item.category == "drinks");
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  return (
    <div>
      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        className="mt-8 text-center"
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList>
          <Tab>SALAD</Tab>
          <Tab>PIZZA</Tab>
          <Tab>SOUP</Tab>
          <Tab>DESSERTS</Tab>
          <Tab>DRINKS</Tab>
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
  );
};

export default Order;
