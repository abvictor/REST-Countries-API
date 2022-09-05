import React from "react";

import useFetchCountries from "../../hooks/useFetchCountries";
import styles from "./countries.module.css";

const Countries = () => {
  const { countries, loading, error } = useFetchCountries();

  if (loading) return <h3 className={styles.loading}>Carregando...</h3>;
  if (error) console.log(error);

  return (
    <main className={styles.main_container}>
      {countries.map((country, key) => (
        <div className={styles.card_styles} key={key}>
          <img src={country.flag} alt="" />
          <span>
            <strong>{country.name}</strong>
          </span>
          <p>
            <strong>Population: </strong>
            {country.population}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
        </div>
      ))}
    </main>
  );
};

export default Countries;
