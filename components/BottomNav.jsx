import {
  LuBeef,
  LuChevronDown,
  LuCoffee,
  LuCookie,
  LuMenu,
} from "react-icons/lu";
import { Link } from "react-router";
import AllCategories from "../pages/AllCategories";
import { useState } from "react";

const BottomNav = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="navbar max-md:hidden font-inter max-w-340 mx-auto">
      <div className="flex-1">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="btn btn-md btn-info rounded-full text-white font-dosis uppercase"
        >
          <LuMenu /> All Categories <LuChevronDown />
        </button>
        {isVisible && <AllCategories />}
      </div>
      <nav className="flex-none font-dosis">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/meats-and-seafood" className="bg-transparent p-0">
              <button className="btn btn-ghost rounded-full uppercase hover:border-info/10 hover:bg-info/10 hover:text-info">
                <LuBeef /> Meats & Seafood
              </button>
            </Link>
          </li>
          <li>
            <Link to="/bakery" className="bg-transparent p-0">
              <button className="btn btn-ghost rounded-full uppercase hover:border-info/10 hover:bg-info/10 hover:text-info">
                <LuCookie /> Bakery
              </button>
            </Link>
          </li>
          <li>
            <Link to="/beverages" className="bg-transparent p-0">
              <button className="btn btn-ghost rounded-full uppercase hover:border-info/10 hover:bg-info/10 hover:text-info">
                <LuCoffee /> Beverages
              </button>
            </Link>
          </li>
          <li>
            <Link to="/blog" className="bg-transparent p-0">
              <button className="btn btn-ghost rounded-full uppercase hover:border-info/10 hover:bg-info/10 hover:text-info">
                Blog
              </button>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="bg-transparent p-0">
              <button className="btn btn-ghost rounded-full uppercase hover:border-info/10 hover:bg-info/10 hover:text-info">
                Contact
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BottomNav;
