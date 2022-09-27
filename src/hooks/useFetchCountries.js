import { useEffect, useState } from "react";

function useFetchCountries() {
  const [countries, setCountries] = useState([
    {
      country: "",
      name: "",
      population: "",
      region: "",
      capital: "",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = "https://restcountries.com/v3.1/all";

  useEffect(() => {
    setLoading(true);

    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(function (json) {
        let info = json.map((country) => {
          return {
            flag: country.flags.svg,
            name: country.name.common,
            population: country.population,
            region: country.region,
            capital: country.capital,
          };
        });

        setCountries(info);
      })
      .catch((err) => {
        setError(err);
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return { getCountries: countries, loading, error };
}
export default useFetchCountries;
