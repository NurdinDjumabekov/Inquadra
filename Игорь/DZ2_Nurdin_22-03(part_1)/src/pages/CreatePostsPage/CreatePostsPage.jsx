import React, { useState } from "react";
import { createPostFN } from "../../helpers";

const CreatePostsPage = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputBody, setInputBody] = useState("");
  //   console.log(inputBody);
  //   console.log(inputTitle);
  const callCreateFN = () => {
    createPostFN(inputTitle, inputBody);
  };
  return (
    <div className="container">
      <div>
        <input
          placeholder="input title"
          onChange={(e) => setInputTitle(e.target.value)}
        />
        <input
          placeholder="input body"
          onChange={(e) => setInputBody(e.target.value)}
        />
        <button onClick={callCreateFN}>Добавить</button>
      </div>
    </div>
  );
};

export default CreatePostsPage;
