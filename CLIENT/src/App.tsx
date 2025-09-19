import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useEffect } from "react";
import ProfileLayout from "./Layouts/ProfileLayout";
import MainProfile from "./Comp/MainProfile";
import Organization from "./pages/Organisation";

function App() {
  useEffect(() => {
    const mainContent = document.querySelector(
      "[data-mainContent]"
    ) as HTMLElement;
    const sidebar = document.querySelector("[data-sidebar]");
    const navbar = document.querySelector("[data-navbar]") as HTMLElement;
    if (mainContent && sidebar && navbar) {
      mainContent.style.marginLeft = `${sidebar.clientWidth}px`;
      mainContent.style.marginTop = `${navbar.clientHeight}px`;
      console.log("running");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route index element={<MainProfile />} />
              <Route path="other" element={<div>Hi this is other</div>} />
            </Route>
            <Route path="/org" element={<Organization />} />
            <Route path="/other" element={<div>Other route</div>} />
            // Add more routes here as needed
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
