import React, { useContext } from "react";
import { motion } from "framer-motion";

import rickLoader from '../../assets/loaderRick.png';

import "../loader/Loader.css";
export const Loader = () => {
 
  return (
    <div className="bgLoader">
      <motion.div initial={{opacity: 1, scale: 1, x:0, y: 300}} animate={{opacity:0, scale:0.5, x:0, y:300}} transition={{ duration: 0.4 }}>
      <div className="containerLoader">
        <figure>
          <img src={rickLoader} alt="" />
        </figure>
      </div>
    </motion.div>
    </div>
  );
};
