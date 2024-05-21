import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import MenuItem from "../Shared/MenuItem";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="my-8">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"Check it out"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10">
        {popular.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6">
        <button className="btn btn-outline border-0 border-b-4 mt-4 text-center">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
