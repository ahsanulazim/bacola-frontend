import { LuMenu, LuSearch, LuShoppingBag, LuUserRound } from "react-icons/lu";
import { Link } from "react-router";
import CountrySelect from "./CountrySelect";

const Navbar = () => {
  return (
    <div className="navbar max-w-340 mx-auto gap-8">
      <div className="navbar-start lg:gap-8 md:w-auto">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-2"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost drawer-button"
          >
            <LuMenu className="inline-block h-6 w-6 stroke-current" />
          </label>
        </div>
        <Link to="/" className="max-md:hidden">
          <img
            className="w-40"
            src="/images/bacola-logo.png"
            alt="Bacola Logo"
          />
          <span className="text-[10.5px] opacity-50 font-inter">
            Online Grocery Shopping Center
          </span>
        </Link>
        <div className="max-lg:hidden">
          <CountrySelect />
        </div>
      </div>
      <div className="navbar-center md:flex-1">
        <label className="input max-md:hidden h-14.5 w-full font-inter">
          <input type="search" required placeholder="Search for products..." />
          <LuSearch className="h-[1em] opacity-50 size-5" />
        </label>
        <Link to="/" className="md:hidden">
          <img
            className="w-30"
            src="/images/bacola-logo.png"
            alt="Bacola Logo"
          />
        </Link>
      </div>
      <div className="navbar-end items-center gap-3 md:w-auto">
        <Link to="/login" className="max-md:hidden">
          <button className="btn btn-circle avatar">
            <LuUserRound className="size-5" />
          </button>
        </Link>
        <span className="font-bold">$0.00</span>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-error btn-circle btn-soft"
          >
            <div className="indicator">
              <LuShoppingBag className="h-5 w-5" />
              <span className="badge badge-sm badge-error indicator-item">
                8
              </span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-sm dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
