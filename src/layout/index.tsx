import { Outlet } from "react-router-dom";
import { Drawer } from "../components/drawer";
import Footer from "../components/footer";

export default function Layout() {
  return (
    <main className="content">
      <Drawer />
      <Footer />
      <Outlet />
    </main>
  );
}
