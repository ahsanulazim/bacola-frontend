import BottomNav from "./BottomNav";
import Dock from "./Dock";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Drawer = ({ children }) => {
  return (
    <div className="drawer">
      <input
        id="my-drawer-2"
        type="checkbox"
        className="drawer-toggle lg:hidden"
      />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="bg-main h-2"></div>
        <header className="bg-base-100 font-dosis border-b border-b-black/10 sticky top-0 z-50">
          <Navbar />
          <BottomNav />
        </header>
        {/* Page content here */}
        {children}
        <Footer />
        <Dock />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <Sidebar />
      </div>
    </div>
  );
};

export default Drawer;
