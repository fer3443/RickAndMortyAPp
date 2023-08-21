import React, {useContext} from "react";
import {motion} from 'framer-motion';

import { LoaderProvider } from "../../context/LoaderContext";
import '../loader/Loader.css'
export const Loader = () => {
  
  const { loading } = useContext(LoaderProvider)

  return (
    <motion.div animate={{opacity: loading ? 1 : 0}}>
      <div className="containerLoader">
        <figure>
          <img src="src/assets/loaderRick.png" alt="" />
        </figure>
      </div>
    </motion.div>
  );
};
