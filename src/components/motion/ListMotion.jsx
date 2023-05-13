import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const ListMotion = ({ children }) => {
    const controls = useAnimationControls();

    useEffect(() => {
        controls.start("visible");
    }, []);

    const variants = {
        hidden: {
            opacity: 0,
            x: "-10vw",
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", duration: 1.2, bounce: 0.4 },
        },
    };

    return (
        <motion.div initial="hidden" animate={controls} variants={variants}>
            {children}
        </motion.div>
    );
};

export default ListMotion;
