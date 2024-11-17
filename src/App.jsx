import { useState } from "react";
import "./App.css";
import ImageGalery from "./components/imageGalery/ImageGalery";
import SearchBar from "./components/searchBar/SearchBar";
import ImageModal from "./components/imageModal/ImageModal"

function App() {

  const [term, setTerm] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)

  console.log(isOpenModal)

  const handleSearch = (query) => {
    setTerm(query)
  }

  return (
    <>
      <SearchBar onSearch ={handleSearch}/>
      <ImageGalery query ={term} setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal}  />
      {
        isOpenModal ? 
        <ImageModal /> : null
      }
    </>
  );
}

export default App;
