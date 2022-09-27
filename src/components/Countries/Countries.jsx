import React, { useState, useEffect } from "react";

import useFetchCountries from "../../hooks/useFetchCountries";

import styles from "./countries.module.css";

const Countries = () => {
  const { getCountries, getRegions, loading, error } = useFetchCountries();
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const [search, setSearch] = useState("");
  // const [selectRegion, setSelectRegion] = useState([]);

  useEffect(() => {
    handleGetCountries();
    // handleGetRegions();
  }, [search]);

  // function handleGetCountries() {
  //   if (search) {
  //     const filteredCountries = getCountries.filter((country) =>
  //       country.name.toLowerCase().includes(search.toLowerCase())
  //     );
  //     setCountries(filteredCountries);
  //     setRegions(getRegions);

  //     return;
  //   }

  //   setCountries(getCountries);
  // }

  // function handleFilterCountriesByRegion(e) {
  //   const region = countries.filter((item) => item.region === e.target.value);

  //   setSelectRegion(region);
  //   console.log(region);
  // }

  function handleGetRegions() {
    const filteredRegions = countries.reduce((acc, curr) => {
      return new Set([...acc, curr.region]);
    }, []);

    setRegions(filteredRegions);
  }

  if (loading) return <h3 className={styles.loading}>Carregando...</h3>;
  if (error) console.log(error);

  return (
    <main className={styles.main_container}>
      <div className={styles.filters}>
        <input
          placeholder="Search for a country..."
          className={styles.input_search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select className={styles.select_filter} onChange={handleGetRegions}>
          <option value="">Search by region</option>
          {regions.map((country, index) => (
            <option key={index}>{country}</option>
          ))}
        </select>
      </div>

      {search.length > 0 ? (
        <div className={styles.countries_container}>
          {filteredCountries.map((country, index) => (
            <div className={styles.card_styles} key={index}>
              <div className={styles.items}>
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className={styles.country_info}>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Population:</strong> {country.population}
                  </p>
                  <p>
                    <strong>Capital:</strong> {country.capital}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
      // <div className={styles.countries_container}>
      //   {countries.map((country, index) => (
      //     <div className={styles.card_styles} key={index}>
      //       <div className={styles.items}>
      //         <img src={country.flag} alt="Country flag" />
      //         <h3>{country.name}</h3>
      //         <div className={styles.country_info}>
      //           <p>
      //             <strong>Region:</strong> {country.region}
      //           </p>
      //           <p>
      //             <strong>Population:</strong> {country.population}
      //           </p>
      //           <p>
      //             <strong>Capital:</strong> {country.capital}
      //           </p>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
       )}  
    </main>
  );
};

export default Countries;
