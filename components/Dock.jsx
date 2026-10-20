import { LuHouse, LuMenu, LuSearch, LuUserRound } from "react-icons/lu";

const Dock = () => {
  return (
    <div className="dock sticky bottom-0 md:hidden">
      <button>
        <LuHouse className="size-[1.2em]" />
        <span className="dock-label">Home</span>
      </button>

      <button>
        <LuSearch className="size-[1.2em]" />
        <span className="dock-label">Search</span>
      </button>

      <button>
        <LuUserRound className="size-[1.2em]" />
        <span className="dock-label">Account</span>
      </button>
      <button>
        <LuMenu className="size-[1.2em]" />
        <span className="dock-label">Category</span>
      </button>
    </div>
  );
};

export default Dock;
