import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { PageContainer, BackButton, CountryContainer, CountryInfo } from "./styles";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  let { name } = useParams();
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => res.json())
      .then(function (json) {
        const info = json.map((country) => {
          return {
            flag: country.flags.svg,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
            borders: country.borders,
          };
        });
        setCountry(info);
        window.localStorage.setItem("country", JSON.stringify(info));
      });
  }, [name]);
  return (
    <PageContainer>
      <BackButton>
        <Link to="/">
          <BsArrowLeft size={24} />
          Back
        </Link>
      </BackButton>
      <CountryContainer>
        {country.map((item) => (
          <CountryInfo>
            <img src={item.flag} alt="" />
            <h3>Country name: {item.name}</h3>
            <p>Capital: {item.capital}</p>
            <p>Region: {item.region}</p>
            <p>
              Border Countries:{" "}
              {item.borders
                ? item.borders.map((border) => <span key={border}>{border},</span>)
                : "Any country around"}
            </p>
            <p>Population: {item.population}</p>
          </CountryInfo>
        ))}
      </CountryContainer>
    </PageContainer>
  );
};
export default Country;
