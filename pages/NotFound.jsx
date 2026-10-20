import { LuSearch } from "react-icons/lu";
import LayoutFull from "../components/layout/LayoutFull";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <LayoutFull>
      <section className="text-center font-inter space-y-5">
        <h1 className="text-[200px] font-semibold">404</h1>
        <h2 className="text-3xl">That page can't be found</h2>
        <p className="opacity-50 text-sm">
          It looks like nothing was found at this location. Maybe try to search
          for what you are looking for?
        </p>
        <label htmlFor="" className="input w-full">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search for products..."
          />
          <LuSearch className="opacity-50" />
        </label>
        <Link to="/">
          <button className="btn btn-info">Go To Homepage</button>
        </Link>
      </section>
    </LayoutFull>
  );
};

export default NotFound;
