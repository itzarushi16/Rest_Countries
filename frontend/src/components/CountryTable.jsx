const CountryTable = ({ countries }) => {
  return (
    <table border="1" width="100%" cellPadding="10">
      <thead>
        <tr>
          <th>Country Code</th>
          <th>Country Name</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(countries).map(([code, data]) => (
          <tr key={code}>
            <td>{code}</td>
            <td>{data.country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CountryTable;
