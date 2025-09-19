import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProfileLayout from "./Layouts/ProfileLayout";
import MainProfile from "./Comp/MainProfile";
import Organization from "./pages/Organisation";

function App() {
 

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
