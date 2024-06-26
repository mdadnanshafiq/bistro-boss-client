const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="size-[80px]"
        src={image}
        alt=""
      />
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="uppercase">{name}-------</h3>
          <p className="text-yellow-600">$ {price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
