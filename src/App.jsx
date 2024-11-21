import { useState, useEffect, useCallback } from "react";
import "./App.css";
import MemoImageGallery from "./components/imageGalery/ImageGallery";
import SearchBar from "./components/searchBar/SearchBar";
import ImageModal from "./components/imageModal/ImageModal";
import useFetch from "./hooks/useFetch";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import Loader from "./components/loader/Loader";

function App() {
  const [term, setTerm] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoLarge, setPhotoLarge] = useState("");
  const [page, setPage] = useState(1);

  const handleSearch = useCallback((query) => {
    setTerm(query);
    setPage(1);
    setPhotos([]);
  }, []);

  const url = term
    ? `https://api.unsplash.com/search/photos?per_page=12&page=${page}&query=${term}&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
    : null;

  const { data, loading, error } = useFetch(url || "");

  useEffect(() => {
    if (data && data.results) {
      setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
    }
  }, [data]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <div>Error: {error.message}</div>}
      <MemoImageGallery
        setPhotoLarge={setPhotoLarge}
        setIsOpenModal={setIsOpenModal}
        term={term}
        photos={photos}
      />
      {loading && <Loader />}
      <ImageModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        photoLarge={photoLarge}
      />
      {data && data.total_pages !== page && <LoadMoreBtn setPage={setPage} />}
    </>
  );
}

export default App;
