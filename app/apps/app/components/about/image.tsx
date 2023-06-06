import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface AboutImageProps {
  readonly animationDelay: number
}

export function AboutImage(props: AboutImageProps) {
  return (
    <motion.img
      variants={fadeIn('right', props.animationDelay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.7 }}
      loading="lazy"
      src="/tech.png"
      alt="about"
    />
  )
}
