import { createContext, useContext, useEffect, useState } from "react";

interface ContextPayload {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const GlobalContext = createContext<ContextPayload | undefined>(undefined);

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("Context not available!!");
  }
  return context;
}

export function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const adjustLayout = () => {
      const mainContent = document.querySelector(
        "[data-mainContent]"
      ) as HTMLElement;
      const sidebar = document.querySelector("[data-sidebar]") as HTMLElement;
      const navbar = document.querySelector("[data-navbar]") as HTMLElement;

      if (mainContent && sidebar && navbar) {
        mainContent.style.marginLeft = `${sidebar.clientWidth}px`;
        mainContent.style.marginTop = `${navbar.clientHeight}px`;
      }
    };

    adjustLayout(); 
    window.addEventListener("resize", adjustLayout);

    return () => window.removeEventListener("resize", adjustLayout);
  }, []);

  return (
    <GlobalContext.Provider value={{ user, setUser }}>
      {children}
    </GlobalContext.Provider>
  );
}
