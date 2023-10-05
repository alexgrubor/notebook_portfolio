"use client"
import { motion, useScroll } from "framer-motion"

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className="progress-bar"
      initial={{ scaleX: 0 }}
      style={{ scaleX: scrollYProgress }}
    />
  )
}

export default ScrollProgress