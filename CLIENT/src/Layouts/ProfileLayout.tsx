import Profile from "@/pages/Profile";
import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div>
      <Profile />

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
