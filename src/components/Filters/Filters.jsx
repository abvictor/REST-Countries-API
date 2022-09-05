import React from "react";
import styles from "./filters.module.css";
const Filters = () => {
  return (
    <div className={styles.filters_div}>
      <select name="regions" id="1">
        <option>Filter by a region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
  );
};

export default Filters;
