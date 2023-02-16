import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <ul style={{ display: "flex", listStyleType: "none" }}>
        <li style={{ marginRight: "15px" }}>
          <NavLink to="/" className={({ isActive }) => isActive && "active"}>
            main Page
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && "active"}
            state="hello world"
          >
            about Page
          </NavLink>
        </li>
        <li style={{ marginRight: "15px" }}>
          <NavLink
            to="/Portfolio"
            className={({ isActive }) => isActive && "active"}
          >
            Portfolio Page
          </NavLink>
        </li>
      </ul>
    </>
  );
}
