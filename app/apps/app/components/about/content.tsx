import { AboutStat } from './stat'
import Link from 'next/link'

interface AboutContentProps {
  readonly inView: boolean
}

export function AboutContent(props: AboutContentProps) {
  return (
    <div className="pl-6">
      <h1 className="pb-5 text-6xl text-secondary">About Me</h1>
      <h3 className="max-w-lg pb-5 text-3xl text-primary">
        I&apos;m a results-driven software engineer and dedicated researcher
      </h3>
      <p className="max-w-lg pb-5 text-primary">
        I graduated from UC Berkeley with a B.A. in computer science and M.S. in
        Human-Computer Interaction (HCI). At Berkeley, I spent 4 years as an
        academic researcher. After graduating, I&apos;ve had the opportunity to
        apply my knowledge of computer science and HCI to design seamless user
        experiences for emerging blockchain technologies for 2+ years in
        industry. I&apos;m passionate about writing clean, efficient code and
        always stay up-to-date with the latest industry trends and best
        practices.
      </p>
      <div className="flex flex-col pb-10">
        <AboutStat
          inView={props.inView}
          prefix=""
          suffix="+"
          counter={{
            start: 0,
            end: 2,
            duration: 3,
          }}
          label={
            <>
              Years of Industry <br /> Experience
            </>
          }
        />
        <AboutStat
          inView={props.inView}
          prefix=""
          suffix="k+"
          counter={{
            start: 0,
            end: 1,
            duration: 3,
          }}
          label={
            <>
              Code Reviews <br /> Conducted
            </>
          }
        />
        <AboutStat
          inView={props.inView}
          prefix="$"
          suffix="+"
          counter={{
            start: 0,
            end: 1000000,
            duration: 1.5,
          }}
          label={
            <>
              Highest Grossing <br /> Project
            </>
          }
        />
      </div>
      <div className="flex pb-5 gap-x-6">
        <Link className="rounded-btn-grad" href={'#contact'}>
          Contact Me
        </Link>
        <Link
          className="pt-2 pb-2 text-grad"
          href="./resume.pdf"
          target="_blank"
        >
          View Résumé
        </Link>
      </div>
    </div>
  )
}
