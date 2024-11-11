
import axios from "axios"
import { useEffect,useState } from "react"
import ImageCard from "../imageCard/ImageCard"
import styles from './ImageGalery.module.css'
export default function ImageGalery({query}) {

  const [photos, setPhotos] = useState([])


  console.log(query)

    const getPhotos = () => {
        axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`)
        .then(res =>setPhotos(res.data.results))
        .catch(err => console.log(err))
    }

    useEffect(() => {
       if(query !== ''){
        getPhotos()
       }
    },[query])


    console.log(photos)

  return (
    <div className={styles.photosContainer}>
      {
        photos.length > 0 ? (photos.map((photo => 
          <ImageCard photo={photo} key={photo.id}/>
        ))) : (<div>burasi bos</div>)
      }
    </div>
  )
}
