import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";
import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ photos, setPhotos, term }) {
  const [page, setPage] = useState(1);

  const url = term
    ? `https://api.unsplash.com/search/photos?per_page=12&query=${term}&page=${
        page + 1
      }&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
    : null;

  const { data,loading, error } = useFetch(url);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
    if (data && data.results) {
      setPhotos([...photos, ...data.results]);
    }
  };

  return (
    <div className={styles.buttonContainer}>
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="purple"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : (
        <button
          className={styles.button}
          onClick={handleLoadMore}
          disabled={loading}
        >
          Load More
        </button>
      )}
    </div>
  );
}
