import styles from './ImageCard.module.css'
export default function ImageCard({photo}) {
  return (
    <div className={styles.photoContainer}>
        <img className={styles.photoImg} src={photo.urls.small} alt="" />
    </div>
  )
}
