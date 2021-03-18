import React from 'react';
import { motion } from "framer-motion";


export const Patrik: React.FC = () => {
    return (
        <>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'purple', color: 'white', textAlign: 'center', }}
        >R</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'blue', color: 'white', textAlign: 'center', }}
        >A</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'turquoise', color: 'white', textAlign: 'center', }}
        >I</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'green', color: 'white', textAlign: 'center', }}
        >N</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'yellow', color: 'black', textAlign: 'center', }}
        >B</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'orange', color: 'white', textAlign: 'center', }}
        >O</motion.div>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'red', color: 'white', textAlign: 'center', }}
        >W</motion.div>
        </>
    )
}


