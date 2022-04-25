import {  motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Parallax({children , y, visibleOpacity, hiddenOpacity}) {

    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.7,
        triggerOnce: false,
      })
    
      const variants = {
        visible: { y: y, opacity: visibleOpacity },
        hidden: {
          y: 10,
          opacity:hiddenOpacity
        },
      }

    return(

        <motion.div
          className="w-full"
          animate={inView ? 'visible' : 'hidden'}
          variants={variants}
          transition={{ duration: 1, ease: 'easeInOut' }}
          ref={ref}
        >

            {children}
        </motion.div>

    )
};