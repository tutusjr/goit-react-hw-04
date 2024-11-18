import Modal from "react-modal";
import styles from "./ImageModal.module.css"
import { useState } from "react";

Modal.setAppElement('#root');

export default function ImageModal({ photoLarge }) {

  return (
    <div className={styles.modalContainer}>
      
      <Modal className={styles.modal}>
        <img src= {photoLarge} alt='image' /> 
        <h1>modal opened</h1>
      </Modal>
    </div>
  );
}
