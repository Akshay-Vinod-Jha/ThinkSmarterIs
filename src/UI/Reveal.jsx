// import React from 'react'
import { motion } from "framer-motion";
import { useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
const Reveal = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    isInView && mainControls.start("visible");
  }, [isInView]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.25,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default Reveal;
