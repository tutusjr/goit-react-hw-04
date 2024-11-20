import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ setPage }) {
  function handleLoadMore(e) {
    e.preventDefault();
    setPage((currentPage) => currentPage + 1);
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
}
