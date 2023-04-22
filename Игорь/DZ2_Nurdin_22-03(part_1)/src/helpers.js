import axios from "axios";
let count = 100;
export const createPostFN = (inputTitle, inputBody) => {
  //   console.log(inputBody);
  //   console.log(inputTitle);
  count++;
  console.log(count);
  axios({
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      userId: 11,
      title: inputTitle,
      body: inputBody,
      id: count,
    },
  });
};
