import './Main.css';

import React from 'react';
import { motion, useTime, useTransform } from "framer-motion"


const element = () => {


  return (
    <div>
      <h1>
        Main
      </h1>
        <motion.div
          class = "box"
          animate={{ y:100}}
          transition={{
            from: 0,
            repeat: Infinity, 
            repeatType: "reverse",
            duration: 2
          }}
        >
          <div class = "box_text_container"></div>
        </motion.div>
    </div>
  )
}

export default element
