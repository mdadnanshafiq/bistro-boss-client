import { Link } from "react-router-dom";
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
      <div className="flex justify-center items-center my-6">
        <Link
          to={`/order/${title}`}
          className="btn btn-outline border-0 border-b-4 mt-4 text-center uppercase"
        >
          Add to Cart
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
