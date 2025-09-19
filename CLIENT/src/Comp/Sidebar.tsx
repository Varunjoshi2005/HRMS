import { Options } from "@/utils";
import styles from "../styles/Sidebar.module.css";

function Sidebar() {
  return (
    <aside data-sidebar>
      <div className={styles.options}>
        {Options.map(({ name, icon }, index) => {
          const Icon = icon;
          return (
            <div key={index} className={styles.option}>
              <span className={styles.icon}>
                <Icon size={20} />
              </span>
              <span>{name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;
