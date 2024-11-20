import styles from "./Loader.module.css"
import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <div className={styles.dots}>
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
    </div>
  );
}
