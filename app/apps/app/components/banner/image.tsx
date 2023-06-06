import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface BannerImageProps {
  readonly animationDelay: number
}

export function BannerImage(props: BannerImageProps) {
  return (
    <motion.img
      variants={fadeIn('down', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
      loading="lazy"
      src="/banner.png"
      alt="banner"
    />
  )
}
