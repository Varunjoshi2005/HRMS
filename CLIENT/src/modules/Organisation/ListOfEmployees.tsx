import React from "react";
import styles from "./ListOfEmployee.module.css";
import type { Employee } from "@/types";

interface ListOfEmployeesProps {
  employees: Employee[];
}

const ListOfEmployees: React.FC<ListOfEmployeesProps> = ({ employees }) => {
  return (
    <div className={styles.container}>
      {employees.map((emp) => (
        <div key={emp.id} className={styles.card}>
          <img src={emp.image} alt={emp.name} className={styles.avatar} />
          <div className={styles.info}>
            <h3>{emp.name}</h3>
            <p className={styles.role}>{emp.role}</p>
            <p><strong>Department:</strong> {emp.department}</p>
            <p><strong>Location:</strong> {emp.location}</p>
            <p><strong>Email:</strong> {emp.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListOfEmployees;
