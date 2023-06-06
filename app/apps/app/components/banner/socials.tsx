import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { fadeIn } from '../../utils/variants'
import { LINKS } from 'apps/app/content'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface BannerSocialsProps {
  readonly animationDelay: number
}

export function BannerSocials(props: BannerSocialsProps) {
  return (
    <motion.div
      variants={fadeIn('up', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-row gap-x-6 max-w-max"
    >
      <Link href={LINKS.LINKEDIN.HOME} target="_blank">
        <FaLinkedin />
      </Link>
      <Link href={LINKS.GITHUB.HOME} target="_blank">
        <FaGithub />
      </Link>
      <Link href={LINKS.FIVERR} target="_blank">
        <FaCode />
      </Link>
    </motion.div>
  )
}
