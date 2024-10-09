import { motion } from "framer-motion";
import { useDrawerStore } from "../../store/drawer";
import { Navbar } from "../navbar";
import useCloseDrawer from "./hooks/useCloseDrawer";
import { menuVariants } from "./constant";

export function Drawer() {
  const { open, openDrawer, closeDrawer } = useDrawerStore();
  const { drawerRef } = useCloseDrawer(open, closeDrawer);


  return (
    <div className=" bg-white h-11 relative border-b-2 ">
      <button className=" absolute top-2  " onClick={openDrawer}>
        open
      </button>
      {open && (
        <motion.div
          className="menu"
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={menuVariants}
        >
          <div
            className={`fixed left-0 w-3/5 h-dvh bg-gray-500 p-5 flex justify-between items-start`}
            ref={drawerRef}
          >
            <Navbar />
            <button onClick={closeDrawer}>x</button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
