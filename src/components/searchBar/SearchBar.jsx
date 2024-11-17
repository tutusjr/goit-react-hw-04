import { useState } from "react";

export default function SearchBar({onSearch}) {

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
    setQuery('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">ARA</label>
        <input onChange={handleChange} autoomplete="off" autoFocus value={query} type="text" name="search" placeholder="Search..." />
        <button type="submit">Ara</button>
      </form>
    </>
  );
}
