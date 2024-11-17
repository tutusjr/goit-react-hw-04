import styles from './ImageCard.module.css'
export default function ImageCard({photo,isOpenModal , setIsOpenModal}) {

  

  const handleModal = () => {

  }
  return (
    <div className={styles.photoContainer}>
        <img onClick={() => setIsOpenModal(true)} className={styles.photoImg} src={photo.urls.small} alt="" />
    </div>
  )
}
