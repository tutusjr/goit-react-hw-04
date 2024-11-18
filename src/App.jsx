import { useState, useEffect,useCallback  } from "react";
import "./App.css";
import MemoImageGalery from "./components/imageGalery/ImageGalery";
import SearchBar from "./components/searchBar/SearchBar";
import ImageModal from "./components/imageModal/ImageModal"
import useFetch from "./hooks/useFetch";

function App() {

  const [term, setTerm] = useState('')
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [photos, setPhotos] = useState([]);
  const [photoLarge, setPhotoLarge] = useState('');

  const handleSearch = useCallback ((query) => {
    setTerm(query)
  },[])

  const url = term
  ? `https://api.unsplash.com/search/photos?query=${term}&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
  : null;


  const { data, loading, error } = useFetch(url || "");

  useEffect(() => {
    if (data && data.results) {
      setPhotos(data.results);
    }
  }, [data]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      <MemoImageGalery setPhotoLarge={setPhotoLarge} setIsOpenModal={setIsOpenModal} term = {term} photos={photos} />
      {isOpenModal && <ImageModal photoLarge = {photoLarge}  photos = {photos} />}
    </>
  );
}

export default App;
