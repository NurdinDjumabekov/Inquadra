import { useEffect, useState } from "react";

export default function PortfolioPage() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((photos) => console.log(photos));
  }, []);
  return (
    <>
      <h1>Portfolio Page</h1>

      <div style={{ display: "flex" }}>
        <div>
          
        </div>
        {photos.slice(0, 10).map((photo) => (
          <div>
            <p>{photo.title}</p>
            <img src={photo.url} alt="" />
            <button>узнать url</button>
            <p>--------------------------------------------</p>
          </div>
        ))}

      </div>
    </>
  );
}
