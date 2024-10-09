import { useEffect, useRef } from "react";

function useCloseDrawer(open: boolean, closeDrawer: () => void) {
  const drawerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target as Node)
      ) {
        closeDrawer();
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); 
    };
  }, [open, closeDrawer]);

  return { drawerRef };
}

export default useCloseDrawer;
