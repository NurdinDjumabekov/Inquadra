import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const login = () => {
    setTimeout(() => {
      navigate("/", { state: "user_name_Nurdin" });
    }, 3000);
  };
  return (
    <>
      <input type="text" placeholder="логин" />
      <input type="text" placeholder="пароль" />
      <button onClick={login}>log in</button>
    </>
  );
}
