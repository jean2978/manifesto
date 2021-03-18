import React from 'react'
import { motion } from "framer-motion";

export const Jesper: React.FC = () => {

    return (
        <div style={{ position: "fixed", top: "50%", left: "50%" }}>
            <motion.img
                src="https://cdn.discordapp.com/attachments/782707330974220348/822177787019919360/IMG_0189.PNG"
                animate={{ rotate: 180, cx: [200, 200] }}
                transition={{ repeat: Infinity, duration: 1 }}
                height={"200px"}
                width={"200px"}
            />
        </div>
    )
}


