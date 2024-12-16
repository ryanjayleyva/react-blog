import { Link } from "react-router-dom";
import styles from "../styles/error.module.css";

const ErrorPage = () => {
  return (
    <div className={styles.errorContainer}>
      <h1>Oh no, this route doesn&#39;t exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;
