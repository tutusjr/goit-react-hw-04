import { useEffect, useState } from "react";
import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGalery.module.css";
import useFetch from "../../hooks/useFetch";

export default function ImageGalery({ query , setIsOpenModal, isOpenModal }) {
  const [photos, setPhotos] = useState([]);
  
  const url = query
    ? `https://api.unsplash.com/search/photos?query=${query}&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
    : null;

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data && data.results) {
      setPhotos(data.results);  
    }
  }, [data]);

  if (!query) {
    return <div>Please enter a search term</div>;
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={styles.photosContainer}>
      {photos.length > 0 ? (
        photos.map((photo) => <ImageCard setIsOpenModal={setIsOpenModal} isOpenModal={isOpenModal} photo={photo} key={photo.id} />)
      ) : (
        <div>No photos found</div>
      )}
    </div>
  );
}
