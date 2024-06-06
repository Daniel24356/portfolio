  import './hero.css'
  import {motion} from 'framer-motion'

  const Hero = () => {
    return (
        <>
        <motion.div 
         className='hero'
         initial={{ x: 200,opacity: 0,}}
         animate={{x:0,opacity:1,transition: {
          duration: 1,
          staggerChildren: 0.1,
      }}}
         >
        <motion.h3
        className='motion-am'
        >HEY! <strong>I AM</strong> </motion.h3>
        <motion.h1
        className='motion-name'
        >Daniel <strong>Igwe .I</strong> </motion.h1>
        </motion.div>

        </>
    )
  }

  export default Hero