export default function CountryList({ countries }) {
  if (countries.length === 0) {
    return <p>No countries found</p>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Code</th>
          <th>Capital</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((c, index) => (
          <tr key={index}>
            <td>{c.name}</td>
            <td>{c.code}</td>
            <td>{c.capital}</td>
            <td>{c.continent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
