import Navbar from "@/Comp/Navbar";
import Sidebar from "@/Comp/Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div style={{ display: "flex", height: "100vh", flexDirection: "column" }}>
      <Sidebar />
      <Navbar />
      <main data-mainContent style={{ flex: 1, marginLeft: "100px", marginTop: "50px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
