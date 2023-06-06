import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'

interface BannerSubtitleProps {
  readonly animationDelay: number
}

export function BannerSubtitle(props: BannerSubtitleProps) {
  return (
    <motion.div
      variants={fadeIn('up', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
      className="pb-5 text-xl"
    >
      <span>I am a </span>
      <TypeAnimation
        sequence={[
          'Full Stack Engineer',
          2000,
          'Data Scientist',
          2000,
          'Researcher',
          2000,
          'Freelancer',
          2000,
          'Blogger',
          2000,
        ]}
        speed={50}
        className="font-bold text-secondary"
        wrapper="span"
        repeat={Infinity}
      />
    </motion.div>
  )
}
