import axios from "axios";
import React, { useEffect, useState } from "react";
import { PostInfo } from "../components/PostInfo/PostInfo";

export const PostsPage = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((resp) => resp.data)
      .then((data) => setList(data));
  }, []);
  return (
    <div className="container">
      <div>
        {list.slice(0, 20).map((post, index) => (
          <PostInfo post={post} key={index} />
        ))}
      </div>
    </div>
  );
};
