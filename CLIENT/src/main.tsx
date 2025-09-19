import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.tsx";
import { GlobalContextProvider } from "./context/globalContext.tsx";
createRoot(document.getElementById("root")!).render(

<GlobalContextProvider>

<App />

</GlobalContextProvider>
);
