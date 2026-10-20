import { Outlet } from "react-router";
import Drawer from "../Drawer";

const MainLayout = () => {
  return (
    <Drawer>
      <Outlet />
    </Drawer>
  );
};

export default MainLayout;
