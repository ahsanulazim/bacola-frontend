import { FaStar } from "react-icons/fa6";
import { LuExpand, LuHeart } from "react-icons/lu";

const ProductCard = ({ product }) => {
  const {
    name,
    isAvailable,
    rating,
    original_price,
    current_price,
    discount,
    recommended,
    organic,
    image,
  } = product;

  return (
    <div className="card border-r border-r-black/10 bg-base-100 rounded-none group">
      <figure className="p-6 relative">
        <div className="font-dosis font-semibold absolute top-0 bottom-0 left-0 flex flex-col gap-1 p-5">
          {discount && (
            <span className="badge badge-sm badge-info">
              {Math.round(
                ((original_price - current_price) / original_price) * 100,
              )}
              %
            </span>
          )}
          {organic && (
            <span className="badge badge-sm badge-success badge-soft">
              ORGANIC
            </span>
          )}
          {recommended && (
            <span className="badge badge-sm badge-neutral">RECOMMENDED</span>
          )}
        </div>
        <div className="flex flex-col gap-1 absolute right-5 top-5">
          <button className="btn btn-circle hover:btn-primary hidden group-hover:inline-flex animate-fade-in">
            <LuExpand />
          </button>
          <button className="btn btn-circle hover:btn-primary hidden group-hover:inline-flex animate-fade-in">
            <LuHeart />
          </button>
        </div>
        <img
          className="aspect-square object-cover rounded-box"
          src={image}
          alt={name}
        />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title font-inter text-sm line-clamp-2">{name}</h2>
        <span
          className={`uppercase font-dosis text-xs ${isAvailable ? "text-success" : "text-error"} font-semibold`}
        >
          {isAvailable ? "IN STOCK" : "OUT OF STOCK"}
        </span>
        <div className="flex gap-0.5">
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
          <FaStar className="text-warning" />
        </div>
        <div className="flex items-end font-dosis gap-2 font-semibold">
          {discount && (
            <span className="line-through opacity-50">${original_price}</span>
          )}
          <span className="text-lg text-error">${current_price}</span>
        </div>
        <div className="card-actions">
          <button
            className="btn btn-wide btn-info btn-outline rounded-full font-inter"
            disabled={!isAvailable}
          >
            {isAvailable ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
