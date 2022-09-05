import { useState, useEffect } from "react";

import Header from "../src/components/Header/Header";
import Search from "../src/components/Search/Search";
import Filters from "./components/Filters/Filters";
import Countries from "../src/components/Countries/Countries";
import styles from "./App.module.css";

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className={styles.search_filter_div}>
        <Search />
        <Filters />
      </div>

      <Countries />
    </div>
  );
}

export default App;
