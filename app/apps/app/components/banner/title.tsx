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
      <h3 className="pb-5 text-lg">Hi, my name is</h3>
      <div className="flex flex-row">
        <h1 className="pb-5 text-3xl font-bold lg:text-5xl">Chris De Leon</h1>
      </div>
    </motion.div>
  )
}
