import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AboutEveryPost = () => {
  const [aboutPost, setAboutPost] = useState({});
  const { id } = useParams();
  //   console.log(id, "id");
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => setAboutPost(resp.data));
  }, [id]);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <button onClick={goBack}>back</button>
      <ul>
        <li>
          <h2>Title</h2>
          <p> {aboutPost.title}</p>
        </li>
        <li>
          <h3>Body</h3>
          <p> {aboutPost.body}</p>
        </li>
        <li>
          <p>{aboutPost.id}</p>
        </li>
      </ul>
    </div>
  );
};

export default AboutEveryPost;
