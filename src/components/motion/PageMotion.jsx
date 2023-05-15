import {motion, useAnimationControls} from 'framer-motion';
import {useEffect} from 'react';

const PageMotion = ({children}) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {type: 'spring', duration: 1.2, bounce: 0.4},
    });
  }, []);

  return (
    <motion.div
      className="z-40"
      initial={[{opacity: 0}, {y: '-10vw'}]}
      animate={controls}>
      {children}
    </motion.div>
  );
};

export default PageMotion;
