import type { TabType } from "@/types";
import AboutTab from "./AboutTab";
import ProfileTab from "./ProfileTab";

interface TabPayload {
  currentTab: TabType;
}

function Tab({ currentTab }: TabPayload) {
  switch (currentTab.type) {
    case "about":
      return <AboutTab />;
    case "profile":
      return <ProfileTab />;
    case "job":
      return <div>This is the job tab!</div>;
    case "assets":
      return <div>Assets tab</div>;
    case "document":
      return <div>Document tab</div>;
    default:
      return <div>Nothing with this tab!!</div>;
  }
}

export default Tab;
