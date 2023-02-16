import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate(-1)}>назад</button>
      <button onClick={() => navigate(+1)}>вперёд</button>
      <h1>About Page</h1>
    </>
  );
}
