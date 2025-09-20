import { MenuMoreOptions, Options } from "@/utils";
import styles from "../styles/Sidebar.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <aside data-sidebar>
      <div className={styles.optionsContainer}>
        {Options.map(({ name, icon: Icon, link }, index) => (
          <div
            key={index}
            className={styles.optionsAndSidebar}
            onMouseEnter={() => setHovered(name)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className={styles.option}
              onClick={() => navigate(link)}
            >
              <Icon size={15} />
              <span style={{ fontSize: "10px" }}>{name}</span>
            </div>

            {hovered === name && MenuMoreOptions.has(name) && (
              <div className={styles.moreOptions}>
                {MenuMoreOptions.get(name)?.map((child, i) => (
                  <div
                    key={i}
                    className={styles.dot}
                    onClick={() => navigate(child.link)}
                  >
                    {child.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
