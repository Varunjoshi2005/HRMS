import { Options } from "@/utils";
import styles from "../styles/Sidebar.module.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {

const navigate = useNavigate();

  return (
    <aside data-sidebar>
      <div className={styles.options}>
        {Options.map(({ name, icon , link }, index) => {
          const Icon = icon;
          return (
            <div key={index}  onClick={() => navigate(`${link}`) } className={styles.option}>
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
