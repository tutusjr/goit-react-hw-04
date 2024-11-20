import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import { memo } from "react";

const ImageGallery = ({ photos, term, setIsOpenModal, setPhotoLarge }) => {
  if (!term) {
    return null;
  }

  return (
    <div className={styles.photosContainer}>
      {photos.length > 0 && (
        photos.map((photo) => (
          <ImageCard
            setPhotoLarge={setPhotoLarge}
            setIsOpenModal={setIsOpenModal}
            photo={photo}
            key={photo.id}
          />
        ))
      )}
    </div>
  );
};

const MemoImageGallery = memo(ImageGallery);

export default MemoImageGallery;
