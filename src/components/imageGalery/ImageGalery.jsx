import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGalery.module.css";
import { memo } from "react";

const ImageGalery = ({photos , term , setIsOpenModal, setPhotoLarge}) => {
  
  console.log(photos)

  if(!term){
    return null
  }

  return (
    <div className={styles.photosContainer}>
      {photos.length > 0 ? (
        photos.map((photo) => <ImageCard setPhotoLarge={setPhotoLarge} setIsOpenModal={setIsOpenModal} photo={photo} key={photo.id} />)
      ) : (
        <div>No photos found</div>
      )}
    </div>
  );
}

const MemoImageGalery = memo(ImageGalery);

export default MemoImageGalery;