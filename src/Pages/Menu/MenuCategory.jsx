import Cover from "../../Components/SectionTitle/Cover/Cover";
import MenuItem from "../Home/Shared/MenuItem";

const MenuCategory = ({ items, title, subtitle, coverImg }) => {
  return (
    <div>
      {title && (
        <Cover img={coverImg} title={title} subtitle={subtitle}></Cover>
      )}
      <div className="grid md:grid-cols-2 gap-10 my-6">
        {items.map((item, idx) => (
          <MenuItem key={idx} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
