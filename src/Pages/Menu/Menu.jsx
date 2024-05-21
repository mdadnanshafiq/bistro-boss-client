import { Helmet } from "react-helmet-async";
import Cover from "../../Components/SectionTitle/Cover/Cover";
import coverImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category == "offered");
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"Don't miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
      <MenuCategory
        items={dessert}
        title={"DESSERTS"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={dessertImg}
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"PIZZA"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={pizzaImg}
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"SALAD"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={saladImg}
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"SOUP"}
        subtitle={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
