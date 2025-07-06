import { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar por título, director, año, sinopsis..."
        value={search}
        onChange={handleChange}
        className="search-bar__input"
      />
    </div>
  );
}

export default SearchBar;