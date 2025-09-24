import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProfileLayout from "./Layouts/ProfileLayout";
import MainProfile from "./Comp/MainProfile";
import Organization from "./pages/Organisation";
import { useUserContext } from "./context/UserContext";
import NotFound404 from "./pages/Not-found/NotFound";
import AdminLogin from "./pages/Admin/Admin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const { user } = useUserContext();
  console.log("here", user);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to={"/"} />}
          />


          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

          <Route path="/admin-dashboard" element={<AdminDashboard />} />

          <Route
            path="/"
            element={user ? <AppLayout /> : <Navigate to={"/login"} />}
          >
            <Route index element={<Dashboard />} />
            <Route path="/profile" element={<ProfileLayout />}>
              <Route index element={<MainProfile />} />
            </Route>
            <Route path="/org/employee" element={<Organization />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
