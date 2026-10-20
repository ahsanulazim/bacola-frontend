import { Link } from "react-router";
import {
  LuApple,
  LuBeef,
  LuCandy,
  LuCoffee,
  LuCookie,
  LuEgg,
  LuLeaf,
  LuSnowflake,
} from "react-icons/lu";

const AllCategories = () => {
  return (
    <ul className="menu menu-paged menu-vertical bg-base-100 border border-t-0 rounded-b-md border-black/10 space-y-3 w-64 absolute z-10 -bottom-px left-3 translate-y-full">
      <li>
        <Link to="#">
          <LuApple className="size-4 opacity-50" /> Fruits and Vegetables
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuBeef className="size-4 opacity-50" /> Meals and Seafood
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuEgg className="size-4 opacity-50" /> Breakfast and Dairy
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuCoffee className="size-4 opacity-50" /> Beverages
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuCookie className="size-4 opacity-50" /> Breads and Bakery
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuSnowflake className="size-4 opacity-50" /> Frozen Food
        </Link>
      </li>
      <li>
        <Link to="#">
          <LuCandy className="size-4 opacity-50" /> Biscuit and Snacks
        </Link>
      </li>
      <li>
        <details>
          <summary>
            <LuLeaf className="size-4 opacity-50" />
            Grocery and Staples
          </summary>
          <ul>
            <li>
              <a>All products</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Clothing</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
};

export default AllCategories;
