import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { GlobalContextProvider } from "./context/GlobalContext.tsx";
import { UserContextProvider } from "@/context/UserContext.tsx";
createRoot(document.getElementById("root")!).render(
  <GlobalContextProvider>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </GlobalContextProvider>
);
