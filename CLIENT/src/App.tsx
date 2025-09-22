import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProfileLayout from "./Layouts/ProfileLayout";
import MainProfile from "./Comp/MainProfile";
import Organization from "./pages/Organisation";
import { useUserContext } from "./context/UserContext";

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
            path="/"
            element={user ? <AppLayout /> : <Navigate to={"/login"} />}
          >
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
