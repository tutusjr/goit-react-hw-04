import styles from './ImageCard.module.css'
export default function ImageCard({photo, setIsOpenModal , setPhotoLarge}) {

  const handleClickImage = () => {
    setIsOpenModal(true)
    setPhotoLarge(photo.urls.regular)
  }

  
  return (
    <div onClick={handleClickImage} className={styles.photoContainer}>
        <img className={styles.photoImg} src={photo.urls.small} alt="" />
    </div>  
  )
}
