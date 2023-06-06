import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface BannerTitleProps {
  readonly animationDelay: number
}

export function BannerTitle(props: BannerTitleProps) {
  return (
    <motion.div
      variants={fadeIn('up', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
    >
      <h3 className="pb-5 text-3xl">Hi, my name is</h3>
      <h1 className="pb-5 text-6xl font-bold">Chris De Leon</h1>
    </motion.div>
  )
}
