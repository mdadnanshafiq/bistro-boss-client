import FoodCard from "../../Components/SectionTitle/FoodCard/FoodCard";

const OrderTab = ({ item }) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 justify-center items-center w-full mx-auto my-6">
      {item.map((item, idx) => (
        <FoodCard key={idx} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
