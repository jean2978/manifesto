import React from 'react';
import { motion } from "framer-motion";


export const Patrik: React.FC = () => {
    return (
        <>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'purple', color: 'white', textAlign: 'center', }}
        >RR</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'blue', color: 'white', textAlign: 'center', }}
        >AA</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'turquoise', color: 'white', textAlign: 'center', }}
        >II</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'green', color: 'white', textAlign: 'center', }}
        >NN</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'yellow', color: 'black', textAlign: 'center', }}
        >BB</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'orange', color: 'white', textAlign: 'center', }}
        >OO</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'red', color: 'white', textAlign: 'center', }}
        >WW</motion.div>
        </>
    )
}


