import React,{useState} from "react";

import useFetchCountries from "../../hooks/useFetchCountries";

import styles from "./countries.module.css";

const Countries = () => {
  const { countries, loading, error } = useFetchCountries();
  const [search, setSearch] = useState('')
  const [selectRegion, setSelectRegion] = useState([])

  if (loading) return <h3 className={styles.loading}>Carregando...</h3>;
  if (error) console.log(error);


  const filteredCountries = search.length > 0 ? countries.filter((country)=> country.name.toLowerCase().includes(search.toLowerCase()))
  : []


  function handleFilterCountriesByRegion(e) {

    const region = countries.filter(item => item.region === e.target.value);

    setSelectRegion(region)
   
  }
  const regions = countries.map(country => country.region)
  const filteredRegions = regions.filter((country, index) => regions.indexOf(country) === index)


  return (
    <main className={styles.main_container}>

      <div className={styles.filters}>
      <input placeholder="Search for a country..." className={styles.input_search}  onChange={e =>setSearch(e.target.value)}/>
      

      <select className={styles.select_filter} onChange={handleFilterCountriesByRegion}>
         <option value="">Search by region</option>
         {filteredRegions.map((country)=>(
            <option key={country}>{country}</option>
          ))}
        </select>
      </div>

      {search.length > 0  ? (
        <div className={styles.countries_container}>
          {filteredCountries.map((country) => (
            
              <div className={styles.card_styles}>
                <div className={styles.items}>
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className={styles.country_info}>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
                </div>
                </div>  
              </div>
           
          ))}
        </div>
      ) : (
        <div className={styles.countries_container}>
          {countries.map((country) => (
           
              <div className={styles.card_styles}>
                <div className={styles.items}>
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className={styles.country_info}>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Population:</strong> {country.population}</p>
                <p><strong>Capital:</strong> {country.capital}</p>
                </div>
                </div>  
              </div>
          ))}
        </div>
      )}

      </main>
  );
};

export default Countries;
