const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  return (
    <div>
      <div
        className="card w-80 bg-base-100 border mx-auto
      "
      >
        <figure className="relative">
          <img src={image} alt="" />
          <p className="absolute top-3 right-5 bg-black text-white rounded p-2">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0, 50)}...</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-4 text-center uppercase border-orange-400 bg-slate-100">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
