import { fadeIn } from 'apps/app/utils/variants'
import { LINKS } from 'apps/app/content'
import { motion } from 'framer-motion'
import { Skill } from './skill'
import Link from 'next/link'

const skills = [
  {
    title: 'Software Engineer',
    description:
      'During my software engineering journey, I have amassed valuable experience working on diverse projects that encompassed full-stack development, system architecture design, and database optimization. With a strong proficiency in various programming languages and frameworks, I have successfully developed scalable and robust software solutions.',
    url: LINKS.LINKEDIN.EXPERIENCE,
  },
  {
    title: 'Data Scientist',
    description:
      'Throughout my data science journey, I have gained extensive experience working on a wide range of projects that involve data exploration, statistical analysis, machine learning, and predictive modeling. With a deep understanding of various data manipulation and analysis tools, I have developed sophisticated algorithms and models to extract meaningful insights from complex datasets.',
    url: LINKS.LINKEDIN.EXPERIENCE,
  },
  {
    title: 'HCI Researcher',
    description: (
      <>
        I served as an academic researcher for 4 years during my undergrad and
        graduate careers at{' '}
        <Link href="https://www.berkeley.edu/" target="_blank">
          <b>UC Berkeley</b>
        </Link>
        . I performed research for UC Berkeley&apos;s{' '}
        <Link href="https://www.marshalllab.com/" target="_blank">
          <b>Marshall Lab</b>
        </Link>{' '}
        researching{' '}
        <Link href="https://chipdelmal.github.io/MoNeT/SSBSTP" target="_blank">
          <b>pathogen networks</b>
        </Link>{' '}
        for two years. Afterwards, I transitioned to UC Berkeley&apos;s{' '}
        <Link href="https://rise.cs.berkeley.edu/" target="_blank">
          <b>RISE Lab</b>
        </Link>{' '}
        where I worked on the{' '}
        <Link href="https://dataspread.github.io/" target="_blank">
          <b>Dataspread project</b>
        </Link>{' '}
        for another 2 years.
      </>
    ),
    url: LINKS.GOOGLE.SCHOLAR,
  },
]

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:gap-x-36 lg:items-center">
          <div>
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
              className="pb-16"
            >
              <h1 className="pb-5 text-6xl lg:whitespace-nowrap text-secondary">
                My Experience
              </h1>
              <h3 className="pb-12 text-3xl text-primary">
                I specialize in bridging the gap between theory and practice to
                deliver impactful solutions
              </h3>
              <Link className="rounded-btn-grad" href="#projects">
                See My Work
              </Link>
            </motion.div>
            <motion.img
              variants={fadeIn('right', 0.2)}
              initial="hidden"
              whileInView={'visible'}
              viewport={{ once: false, amount: 0.7 }}
              loading="lazy"
              src="./skills.png"
              alt="skills"
            />
          </div>
          <motion.div
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.7 }}
            className="text-primary"
          >
            {skills.map((skill, i) => {
              return (
                <Skill
                  key={i}
                  title={skill.title}
                  description={skill.description}
                  url={skill.url}
                />
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
