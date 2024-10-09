import { Link, useNavigate } from "react-router-dom";

import { useDrawerStore } from "../../store/drawer";

export function Navbar() {
  const { closeDrawer } = useDrawerStore();
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem("userInfo");
    navigate("/login");
  }

  return (
    <nav className="mt-10 flex flex-col gap-y-4 items-start">
      <Link to={"/"} onClick={closeDrawer}>
        Home
      </Link>
      <Link to="/products" onClick={closeDrawer}>
        Products
      </Link>
      <button onClick={handleLogout}>logout</button>
    </nav>
  );
}
