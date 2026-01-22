import { useEffect, useState } from "react";
import api from "./api";
import SearchBar from "./components/SearchBar";
import CountryList from "./components/CountryList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async (params = {}) => {
    const response = await api.get("/countries", { params });
    setCountries(response.data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="container mt-4">
      <h2>🌍 Rest Countries Explorer</h2>
      <SearchBar onSearch={fetchCountries} />
      <CountryList countries={countries} />
    </div>
  );
}

export default App;
