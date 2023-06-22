import { fadeIn } from 'apps/app/utils/variants'
import { LINKS } from 'apps/app/content'
import { motion } from 'framer-motion'
import { Project } from './project'
import Link from 'next/link'

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <motion.div
            className="grid gap-10"
            variants={fadeIn('right', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h1 className="pb-5 text-2xl lg:text-6xl text-grad-solid">
                My Work
              </h1>
              <p className="max-w-3xl mb-10 text-primary">
                Here, I showcase a collection of impactful and innovative
                projects that I have developed or contributed to. My work
                encompasses a diverse range of technologies and domains from web
                applications to machine learning models.
              </p>
              <Link
                className="mb-10 rounded-btn-grad"
                href={LINKS.LINKEDIN.PROJECTS}
                target="_blank"
              >
                View All Projects
              </Link>
            </div>
            <Project
              category="Software Engineering"
              title="XvsX Sports"
              href="https://mpc.xvsxsports.com"
              src="./mpc.png"
              alt="mpc"
            />
          </motion.div>
          <motion.div
            className="grid gap-10"
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
          >
            <Project
              category="Data Science"
              title="BTC Predictor"
              href="https://github.com/Bitcoin-Price-Prediction/btcpredictor"
              src="./btc-predictor.jpg"
              alt="btc-predictor"
            />
            <Project
              category="HCI Research"
              title="Dataspread"
              href="https://dataspread.github.io/"
              src="./dataspread.webp"
              alt="dataspread"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
