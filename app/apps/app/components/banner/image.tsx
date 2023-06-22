/* eslint-disable @next/next/no-img-element */
import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface BannerImageProps {
  readonly animationDelay: number
}

export function BannerImage(props: BannerImageProps) {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full bg-gradient-to-r from-accent-4 via-accent-2 to-text-bg-4"
      variants={fadeIn('down', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
    >
      <img
        className="rounded-full"
        loading="lazy"
        src="/me-bw.png"
        alt="banner"
      />
    </motion.div>
  )
}
