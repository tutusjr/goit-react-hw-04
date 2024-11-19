import { useState, useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";
import styles from "./LoadMoreBtn.module.css";
import toast, { Toaster } from 'react-hot-toast';

export default function LoadMoreBtn({ photos, setPhotos, term }) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const toastShownRef = useRef(false);

  const url = term
    ? `https://api.unsplash.com/search/photos?per_page=12&query=${term}&page=${
        page + 1
      }&client_id=q4VPMl7FQiWWi_voXqSaSIJTduC2o69tSSMEUWBHShc`
    : null;

  const { data, loading, error } = useFetch(url);

  useEffect(() => {
    if (data && data.total_pages === page && !toastShownRef.current) {
      setHasMore(false);
      toast.error("No more pictures to load");
      toastShownRef.current = true;
    }
  }, [data, page]);

  const handleLoadMore = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
      if (data && data.results) {
        setPhotos([...photos, ...data.results]);
      }
    }
  };

  return (
    <div className={styles.buttonContainer}>
      <Toaster position="top-right" />
      {error && <p>Error: {error.message}</p>}
      {loading ? (
        <div className="dots">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="purple"
            radius="9"
            ariaLabel="three-dots-loading"
          />
        </div>
      ) : (
        hasMore && (
          <button
            className={styles.button}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        )
      )}
    </div>
  );
}
