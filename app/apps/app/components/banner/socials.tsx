/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'
import { fadeIn } from '../../utils/variants'
import { LINKS } from 'apps/app/content'
import { GrMail } from 'react-icons/gr'
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
        <div className="flex items-center justify-center text-black">
          <img src="blue.png" alt="blue" width={35} loading="lazy" />
          <FaLinkedin className="absolute" />
        </div>
      </Link>
      <Link href={LINKS.GITHUB.HOME} target="_blank">
        <div className="flex items-center justify-center text-black">
          <img src="purple.png" alt="purple" width={35} loading="lazy" />
          <FaGithub className="absolute" />
        </div>
      </Link>
      <Link href={LINKS.FIVERR} target="_blank">
        <div className="flex items-center justify-center text-black">
          <img src="blue.png" alt="blue" width={35} loading="lazy" />
          <FaCode className="absolute" />
        </div>
      </Link>
      <Link href={LINKS.GOOGLE.EMAIL} target="_blank">
        <div className="flex items-center justify-center text-black">
          <img src="purple.png" alt="purple" width={35} loading="lazy" />
          <GrMail className="absolute" />
        </div>
      </Link>
    </motion.div>
  )
}
