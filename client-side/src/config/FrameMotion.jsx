import gsap from "gsap";

export const itemBottomToTop = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1, // fixed
    transition: {
      duration: 0.6,
      ease: "easeOut", // fixed
    },
  },
};
export const itemBottomToToptoText = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1, // fixed
    transition: {
      duration: 1.2,
      ease: "easeOut", // fixed
      delay:4.5
    },
  },
};

export const Stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
 