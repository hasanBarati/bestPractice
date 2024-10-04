import React, { useState } from "react";
import { motion } from "framer-motion";
export function Drawer() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>open</button>
      {open && (
        <motion.div
          layout
          animate={{ opacity: 0.5 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
        >
          <div className={`fixed left-0 top-0 w-full h-dvh bg-gray-500`}>
            open is
            <button onClick={() => setOpen(false)}>close</button>
          </div>
        </motion.div>
      )}
    </>
  );
}
