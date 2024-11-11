import { useState } from "react";
import "./App.css";
import ImageGalery from "./components/imageGalery/ImageGalery";
import SearchBar from "./components/searchBar/SearchBar";


function App() {

  const [term, setTerm] = useState('')

  const handleSearch = (query) => {
    setTerm(query)
  }

  return (
    <>
      <SearchBar onSearch ={handleSearch}/>
      <ImageGalery query ={term}  />
    </>
  );
}

export default App;
