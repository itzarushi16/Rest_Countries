import { useEffect, useState } from "react";
import { getCountries } from "./api/countryService";
import CountryTable from "./components/CountryTable";
import "./App.css";

function App() {
  const [countries, setCountries] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data.data);
        setLoading(false);
      })
      .catch(console.error);
  }, []);

  // const filteredCountries = Object.fromEntries(
  //   Object.entries(countries).filter(([code, data]) =>
  //     data.country.toLowerCase().includes(searchTerm.toLowerCase())
  //   )
  // );
  const filteredCountries = Object.fromEntries(
    Object.entries(countries).filter(([code, data]) =>{
       const countryName=data.country.toLowerCase().replace(/\s+/g,"");
       const search=searchTerm.toLowerCase().replace(/\s+/g,"");
       return countryName.startsWith(search);
    })
  );
  return (
    <div className="app-container">
      <div className="card">
        <h1>🌍 Countries List</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={() => {}}>Search</button> {/* Optional */}
        </div>

        {loading ? (
          <p className="loading">Loading countries...</p>
        ) : (
          <CountryTable countries={filteredCountries} />
        )}
      </div>
    </div>
  );
}

export default App;
