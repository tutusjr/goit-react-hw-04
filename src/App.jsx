import { useState, useEffect, useCallback } from "react";
import "./App.css";
import MemoImageGalery from "./components/imageGalery/ImageGalery";
import SearchBar from "./components/searchBar/SearchBar";
import ImageModal from "./components/imageModal/ImageModal";
import useFetch from "./hooks/useFetch";
import LoadMoreBtn from "./components/loadMoreBtn/LoadMoreBtn";
import { ThreeDots } from "react-loader-spinner";

function App() {
  const [term, setTerm] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [photoLarge, setPhotoLarge] = useState("");

  const handleSearch = useCallback((query) => {
    setTerm(query);
  }, []);

  const url = term
    ? `https://api.unsplash.com/search/photos?per_page=12&query=${term}&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
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
      {loading && (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="purple"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      )}
      {error && <div>Error: {error.message}</div>}
      <MemoImageGalery
        setPhotoLarge={setPhotoLarge}
        setIsOpenModal={setIsOpenModal}
        term={term}
        photos={photos}
      />
      <ImageModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        photoLarge={photoLarge}
        photos={photos}
      />
      {data &&
        data.total_pages > 0 &&
        (loading ? (
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="purple"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          <LoadMoreBtn term={term} photos={photos} setPhotos={setPhotos} />
        ))}
    </>
  );
}

export default App;
