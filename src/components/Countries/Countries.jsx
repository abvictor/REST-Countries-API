import React, { useState, useEffect } from "react";

import useFetchCountries from "../../hooks/useFetchCountries";

import {Container} from "./styles";

const Countries = () => {
  const { countries, loading, error } = useFetchCountries();
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState([])

 

  useEffect(() => {
    
  }, [search]);



  const filteredCountries = search.length > 0 
  ? countries.filter((country)=> country.name.toLowerCase().includes(search.toLowerCase()))
  : []


  function handleFilterCountriesByRegion(e) {

    const region = countries.filter(item => item.region === e.target.value);

    setRegion(region)
  }
  const regions = countries.map(country => country.region)
  const filteredRegions = regions.filter((country, index) => regions.indexOf(country) === index)




  if(loading) return <h1 className="loading">Carregando...</h1>
  if (error) console.log(error);

  return (
    <Container>
    
    <main className="main_container">
      
      <div className="filters">
        <input
          placeholder="Search for a country..."
          className="input_search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <select className="select_filter" onChange={handleFilterCountriesByRegion}>
          <option value="" className="options">Search by region</option>
          {filteredRegions.map((country, index) => (
            <option key={index} className="options">{country}</option>
          ))}
        </select>
      </div>
      {search.length === 0  && region.length === 0 ? (
        <div className="countries_container">
        {countries.map((country, index) => (
          <div className="card_styles" key={index}>
            <div className="items">
              <img src={country.flag} alt="Country flag" />
              <h3>{country.name}</h3>
              <div className="country_info">
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
        search.length > 0 && region.length === 0 ? (
          <div className="countries_container">
          {filteredCountries.map((country, index) => (
            <div className="card_styles" key={index}>
              <div className="items">
                <img src={country.flag} alt="Country flag" />
                <h3>{country.name}</h3>
                <div className="country_info">
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
        ):  (
          <div className="countries_container">
          {region.map((country, index) => (
             <div className="card_styles" key={index}>
             <div className="items">
               <img src={country.flag} alt="Country flag" />
               <h3>{country.name}</h3>
               <div className="country_info">
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
        ))}  
    </main> 
    </Container>
  );
};

export default Countries;
