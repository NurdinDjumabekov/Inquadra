import axios from "axios";
import React, { useEffect, useState } from "react";
import EveryPost from "../../components/EveryPost/EveryPost";
import styles from "./PostPage.module.css";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => setPosts(resp.data));
  }, []);

  const callNewPost = () => {
    navigate("/createPost");
  };

  return (
    <div className="container">
      <div className={styles.btn_and_text_info}>
        <p>Список постов :</p>
        <button onClick={callNewPost}> Создать пост</button>
      </div>
      <div className={styles.block_all_posts}>
        {posts.map((post) => (
          <EveryPost post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostPage;
