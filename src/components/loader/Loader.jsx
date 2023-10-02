import React, { useContext } from "react";
import { motion } from "framer-motion";

import rickLoader from '../../assets/loaderRick.png';

import { LoaderProvider } from "../../context/LoaderContext";
import "../loader/Loader.css";
export const Loader = () => {
  const { loading } = useContext(LoaderProvider);
 
  return (
    <div className="bgLoader">
      <motion.div initial={{opacity: 1, scale: 1, y: 300}} animate={{opacity:0, scale:0.5 }} transition={{ duration: 0.5 }}>
      <div className="containerLoader">
        <figure>
          <img src={rickLoader} alt="" />
        </figure>
      </div>
    </motion.div>
    </div>
  );
};
