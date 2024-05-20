const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div className="">
        <h3 className="uppercase">{name}-------</h3>
        <p>{recipe}</p>
        <p className="text-yellow-600">$ {price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
