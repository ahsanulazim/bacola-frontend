import { LuArrowRight } from "react-icons/lu";

const SectionHead = () => {
  return (
    <div className="flex justify-between items-center btn-sm">
      <div>
        <h2 className="font-dosis uppercase font-semibold text-xl">
          Best Sellers
        </h2>
        <p className="font-inter opacity-50 text-xs">
          Do not miss the current offers until the end of March.
        </p>
      </div>
      <button className="btn font-inter rounded-full">
        View All <LuArrowRight />
      </button>
    </div>
  );
};

export default SectionHead;
