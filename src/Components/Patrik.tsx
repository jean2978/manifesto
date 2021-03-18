import React from 'react';
import { motion } from "framer-motion";


export const Patrik: React.FC = () => {
    return (
        <>
        <motion.div 
              whileTap={{ scale: 0.3 }} 
              style={{backgroundColor: 'black', color: 'white', textAlign: 'center', }}
        >Bajskörv</motion.div>
        </>
    )
}


