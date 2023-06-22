import { fadeIn } from '../../utils/variants'
import { motion } from 'framer-motion'
import Link from 'next/link'

interface BannerContactProps {
  readonly animationDelay: number
}

export function BannerContact(props: BannerContactProps) {
  return (
    <motion.div
      variants={fadeIn('up', props.animationDelay)}
      initial="hidden"
      whileInView={'visible'}
      viewport={{ once: false, amount: 0.7 }}
      className="flex pb-5 gap-x-6"
    >
      <Link className="rounded-btn-grad" href={'#contact'}>
        Contact
      </Link>
      <Link className="pt-2 pb-2 text-grad" href="./resume.pdf" target="_blank">
        Résumé
      </Link>
    </motion.div>
  )
}
