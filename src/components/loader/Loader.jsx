import React, { useContext } from "react";
import { motion } from "framer-motion";

import { LoaderProvider } from "../../context/LoaderContext";
import "../loader/Loader.css";
export const Loader = () => {
  const { loading } = useContext(LoaderProvider);
 
  return (
    <motion.div initial={{opacity: 1, scale: 1, y: 300}} animate={{opacity:0, scale:0.5 }} transition={{ duration: 0.5 }}>
      <div className="containerLoader">
        <figure>
          <img src="src/assets/loaderRick.png" alt="" />
        </figure>
      </div>
    </motion.div>
  );
};
