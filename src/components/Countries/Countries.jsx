import React,{useState} from "react";
import {Link} from 'react-router-dom'
import useFetchCountries from "../../hooks/useFetchCountries";

import styles from "./countries.module.css";

const Countries = () => {
  const { countries, loading, error } = useFetchCountries();
  const [search, setSearch] = useState('')
  const [region, setSelectRegion] = useState([])

  if (loading) return <h3 className={styles.loading}>Carregando...</h3>;
  if (error) console.log(error);


  const filteredCountries = search.length > 0
  ? countries.filter((country)=> country.name.toLowerCase().includes(search.toLowerCase()))
  : []

  function handleCountryByRegion(e){

    const selected = countries.filter((country)=>country.region === e.target.value);
    

    let filteredSelect = selected.filter((este, i) => selected.indexOf(este) === i);
    
    console.log(filteredSelect)
    setSelectRegion(filteredSelect)
  }


  return (
    <main className={styles.main_container}>

      <div className={styles.filters}>
      <input placeholder="Search for a country..." className={styles.input_search} value={search} onChange={e => setSearch(e.target.value)}  />
      

      <select className={styles.select_filter} onChange={handleCountryByRegion}>
     {countries.map((country)=>(
      
     <option key={country.name} value={country.region}>{country.region}</option>
     ))}
        </select>
      </div>

      {search.length > 0 ? (

        <div className={styles.countries_container}>
          {filteredCountries.map((country) => (
            <Link to={`/country/${country.name}`} key={country.name}>
              <div className={styles.card_styles}>
                <div className={styles.items}>
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className={styles.country_info}>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Population:</strong> {country.capital}</p>
                </div>
                </div>  
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className={styles.countries_container}>
          {countries.map((country) => (
            <Link to={`/country/${country.name}`} key={country.name}>
              <div className={styles.card_styles}>
                <div className={styles.items}>
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className={styles.country_info}>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Population:</strong> {country.capital}</p>
                </div>
                </div>  
              </div>
            </Link>
          ))}
        </div>
      )}
    
    </main>
  );
};

export default Countries;
