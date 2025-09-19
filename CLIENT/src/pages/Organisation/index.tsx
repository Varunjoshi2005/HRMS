import FilterBar from "@/modules/Organisation/FilterBar";
import styles from "./organisation.module.css";
import ListOfEmployees from "@/modules/Organisation/ListOfEmployees";
import { useState } from "react";
import { employees } from "@/utils";
function Organization() {

  const [filters, setFilters] = useState({
    businessUnit: "",
    department: "",
    location: "",
    costCenter: "",
    legacyEntry: "",
    search: ""
  });

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredEmployees = employees.filter((emp) => {
    const matchesBusinessUnit =
      !filters.businessUnit || emp.businessUnit === filters.businessUnit;
    const matchesDepartment =
      !filters.department || emp.department === filters.department;
    const matchesLocation =
      !filters.location || emp.location === filters.location;
    const matchesCostCenter =
      !filters.costCenter || emp.costCenter === filters.costCenter;
    const matchesLegacyEntry =
      !filters.legacyEntry || emp.legacyEntry === filters.legacyEntry;

    const matchesSearch =
      !filters.search ||
      emp.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      emp.id.toString().includes(filters.search) ||
      emp.code?.toLowerCase().includes(filters.search.toLowerCase());

    return (
      matchesBusinessUnit &&
      matchesDepartment &&
      matchesLocation &&
      matchesCostCenter &&
      matchesLegacyEntry &&
      matchesSearch
    );
  });


  return (
    <div>
      <div className={styles.topItems}>
        {["EMPLOYEES", "DOCUMENTS", "ENGAGE"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      <div
        style={{
          fontWeight: "lighter",
          display: "flex",
          gap: "20px",
          padding: "10px",
        }}
      >
        <span>Employee Directory</span>
        <span>Organisation Tree</span>
      </div>

      <div className={styles.SelectedItem}>
        <span>Employee Directory</span>
      </div>

      <FilterBar filters={filters} onFilterChange={handleFilterChange} total={employees.length} shown={filteredEmployees.length} />
      <ListOfEmployees employees={filteredEmployees} />
    </div>
  );
}

export default Organization;
