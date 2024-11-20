import styles from './ImageCard.module.css'
export default function ImageCard({photo, setIsOpenModal , setPhotoLarge}) {

  const handleClickImage = () => {
    setIsOpenModal(true)
    setPhotoLarge(photo.urls.regular)
  }

  
  return (
    <div className={styles.photoContainer}>
        <img onClick={handleClickImage} className={styles.photoImg} src={photo.urls.small} alt="" />
    </div>  
  )
}
