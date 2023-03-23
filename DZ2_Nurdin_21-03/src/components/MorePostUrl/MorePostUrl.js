import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./MorePostUrl.module.css";

export const MorePostUrl = () => {
  const [url, setUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((resp) => resp.data)
      .then((info) => setUrl(info));
  }, [id]);
  console.log(url);
  return (
    <>
      <div className={styles.parent_morePostInfo}>
        <img alt="img!" src={url.url} />
      </div>
      <button className={styles.btnBackInner} onClick={goToBack}>
        Back
      </button>
    </>
  );
};
