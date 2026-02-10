const API_URL = "http://localhost:8080/api/countries";

export const getCountries = async () => {
  const response = await fetch(API_URL);
  return response.json();
};
