import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface BannerDescriptionProps {
  readonly animationDelay: number
}

export function BannerDescription(props: BannerDescriptionProps) {
  return (
    <motion.p
      className="max-w-4xl pb-5 text-sm break-words "
      variants={fadeIn('up', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
    >
      Developer by day, code wizard by night, caffeine-fueled problem solver
      24/7. I thrive on transforming ideas into digital realities. When I&apos;m
      not immersed in lines of code, I enjoy enlightening my dog about recursion
      and dynamic programming (an ongoing adventure). Let&apos;s collaborate and
      bring innovation to life in the ever-changing world of technology.
    </motion.p>
  )
}
