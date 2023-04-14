import React from "react";
import styles from "./preloaderLoading.module.css";

const PreloaderLoading = () => {
  return (
    <div className={styles.parent_preloader}>
      <p>loading .....</p>
    </div>
  );
};

export default PreloaderLoading;
