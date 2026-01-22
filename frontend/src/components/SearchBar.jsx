export default function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    onSearch({
      name: form.name.value,
      code: form.code.value,
      continent: form.continent.value,
      capital: form.capital.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="row g-2 mb-4">
      <input className="form-control col" name="name" placeholder="Country Name" />
      <input className="form-control col" name="code" placeholder="Country Code" />
      <input className="form-control col" name="continent" placeholder="Continent" />
      <input className="form-control col" name="capital" placeholder="Capital" />
      <button className="btn btn-primary col">Search</button>
    </form>
  );
}
