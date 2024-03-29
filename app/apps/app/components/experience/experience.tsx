import { fadeIn } from 'apps/app/utils/variants'
import { LINKS } from 'apps/app/content'
import { motion } from 'framer-motion'
import { JobTitle } from './job-title'
import { Skill } from './skill'
import Link from 'next/link'

const jobTitles = [
  {
    title: 'Full Stack Software Engineer',
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
    title: 'HCI and RDBMS Researcher',
    description: (
      <>
        I served as an academic researcher for 2 years during my undergrad and
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
        and later transitioned to UC Berkeley&apos;s{' '}
        <Link href="https://rise.cs.berkeley.edu/" target="_blank">
          <b>RISE Lab</b>
        </Link>{' '}
        where I worked on the{' '}
        <Link href="https://dataspread.github.io/" target="_blank">
          <b>Dataspread project</b>
        </Link>
        .
      </>
    ),
    url: LINKS.GOOGLE.SCHOLAR,
  },
] as const

const skills = [
  // Row 1
  { color: 'blue', skill: 'JS' },
  { color: 'purple', skill: 'TS' },
  { color: 'blue', skill: 'HTML' },
  { color: 'purple', skill: 'CSS' },

  // Row 2
  { color: 'purple', skill: 'C' },
  { color: 'blue', skill: 'C++' },
  { color: 'purple', skill: 'C#' },
  { color: 'blue', skill: 'Java' },

  // Row 3
  { color: 'blue', skill: 'Node' },
  { color: 'purple', skill: 'Py' },
  { color: 'blue', skill: 'Rust' },
  { color: 'purple', skill: 'Go' },
] as const

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
              viewport={{ once: false, amount: 0.4 }}
              className="pb-16"
            >
              <h1 className="pb-5 text-2xl break-words lg:text-5xl lg:whitespace-nowrap text-grad-solid">
                Experience
              </h1>
              <h3 className="pb-12 text-xl lg:text-2xl text-primary">
                I specialize in bridging the gap between theory and practice to
                deliver impactful solutions
              </h3>
              <Link className="rounded-btn-grad" href="#projects">
                See Work
              </Link>
              <div className="mt-10">
                <div className="grid grid-cols-4 gap-5">
                  {skills.map((elem, i) => {
                    return <Skill key={i} {...elem} />
                  })}
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('left', 0.1)}
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: false, amount: 0.4 }}
            className="text-primary"
          >
            {jobTitles.map((elem, i) => {
              return <JobTitle key={i} {...elem} />
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
