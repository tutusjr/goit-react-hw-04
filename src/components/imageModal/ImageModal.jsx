import Modal from "react-modal";
import styles from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({
  photoLarge,
  isOpenModal,
  setIsOpenModal,
}) {
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Modal
      className={styles.modal}
      isOpen={isOpenModal}
      onRequestClose={handleCloseModal}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        }
      }}
    >
      <img className={styles.modalImage} src={photoLarge} alt="image" />
    </Modal>
  );
}
