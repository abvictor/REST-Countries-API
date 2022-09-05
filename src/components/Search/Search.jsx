import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./search.module.css";
const Search = ({ input }) => {
  const [search, setSearch] = useState("");

  function handleSearch() {
    setSearch(search);
  }
  return (
    <div className={styles.input_div}>
      <span>
        <AiOutlineSearch />
      </span>
      <form action="">
        <input
          type="text"
          value={search}
          placeholder="Search for a country"
          className={styles.input_search}
          onChange={(e) => e.target.value}
          onSubmit={handleSearch}
        />
      </form>
    </div>
  );
};

export default Search;
