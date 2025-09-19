import React from "react";
import styles from "./FilterBar.module.css";

interface FilterBarProps {
  filters: {
    businessUnit: string;
    department: string;
    location: string;
    costCenter: string;
    legacyEntry: string;
    search: string;
  };
  onFilterChange: (name: string, value: string) => void;
  total: number;
  shown: number;
}

const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  onFilterChange,
  total,
  shown
}) => {
  return (
    <div className={styles.filtersWrap}>
      <div className={styles.filterCard}>

        <div className={styles.filterCell}>
          <div className={styles.selectWrap}>
            <select
              value={filters.businessUnit}
              onChange={(e) => onFilterChange("businessUnit", e.target.value)}>
              <option value="" disabled selected>
                Business Unit
              </option>
              <option value="Finance">Finance</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Operations">Operations</option>
            </select>
          </div>
        </div>

        <div className={styles.filterCell}>
          <div className={styles.selectWrap}>
            <select aria-label="Department"
              value={filters.department}
              onChange={(e) => onFilterChange("department", e.target.value)}
            >
              <option value="" disabled selected>
                Department
              </option>
              <option value="Recruitment">Recruitment</option>
              <option value="Development">Development</option>
              <option value="Support">Support</option>
            </select>
          </div>
        </div>

        <div className={styles.filterCell}>
          <div className={styles.selectWrap}>
            <select aria-label="Location"
              value={filters.location}
              onChange={(e) => onFilterChange("location", e.target.value)}
            >
              <option value="" disabled selected>
                Location
              </option>
              <option value="delhi">Delhi</option>
              <option value="Mohali">Mohali</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="remote">Remote</option>
            </select>
          </div>
        </div>

        <div className={styles.filterCell}>
          <div className={styles.selectWrap}>
            <select aria-label="Cost Center"
              value={filters.costCenter}
              onChange={(e) => onFilterChange("costCenter", e.target.value)}
            >
              <option value="" disabled selected>
                Cost Center
              </option>
              <option value="1001">1001 - Admin</option>
              <option value="1002">1002 - Tech</option>
              <option value="1003">1003 - Sales</option>
            </select>
          </div>
        </div>

        <div className={styles.filterCell}>
          <div className={styles.selectWrap}>
            <select aria-label="Legacy Entry"
              value={filters.legacyEntry}
              onChange={(e) => onFilterChange("legacyEntry", e.target.value)}
            >
              <option value="" disabled selected>
                Legacy Entry
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className={styles.filterCell}>
          <div className={styles.searchWrap}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search by name, id or code..."
              value={filters.search}
              onChange={(e) => onFilterChange("search", e.target.value)}
            />
           
          </div>
        </div>
      </div>

      <div className={styles.meta}>
        Showing {shown} of {total}
      </div>
    </div>
  );
};

export default FilterBar;
