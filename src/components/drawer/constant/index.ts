export const menuVariants = {
  open: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};
