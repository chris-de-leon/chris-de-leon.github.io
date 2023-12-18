import { AboutStat } from './stat'
import Link from 'next/link'

interface AboutContentProps {
  readonly inView: boolean
}

export function AboutContent(props: AboutContentProps) {
  return (
    <div>
      <h1 className="pb-5 text-2xl lg:text-5xl text-grad-solid">About Me</h1>
      <h3 className="pb-5 text-xl lg:max-w-xl lg:text-2xl text-primary">
        I&apos;m a results-driven software engineer and dedicated researcher
      </h3>
      <p className="pb-5 text-sm lg:max-w-xl text-primary">
        I graduated from UC Berkeley with a B.A. in computer science in 2020 and
        M.S. in Human-Computer Interaction (HCI) and Relational Database
        Management Systems (RDBMS) in 2022. After graduating, I&apos;ve had the
        opportunity to apply my knowledge of computer science to design seamless
        user experiences for emerging blockchain technologies in industry.
        I&apos;m passionate about writing clean, efficient code and love staying
        up-to-date with the latest industry trends and best practices.
      </p>
      <div className="flex flex-col pb-10 lg:flex-row lg:gap-x-10 gap-y-5">
        <AboutStat
          inView={props.inView}
          prefix=""
          suffix="+"
          counter={{
            start: 0,
            end: 7,
            duration: 3,
          }}
          label={
            <>
              Years of <br /> Coding <br /> Experience
            </>
          }
        />
        <AboutStat
          inView={props.inView}
          prefix=""
          suffix="+"
          counter={{
            start: 0,
            end: 10,
            duration: 3,
          }}
          label={
            <>
              Apps <br /> Deployed to <br /> Production
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
            duration: 2,
          }}
          label={
            <>
              Highest <br /> Grossing <br /> Project
            </>
          }
        />
      </div>
      <div className="flex pb-5 gap-x-6">
        <Link className="rounded-btn-grad" href={'#contact'}>
          Contact
        </Link>
        <Link
          className="pt-2 pb-2 text-grad"
          href="./resume.pdf"
          target="_blank"
        >
          Résumé
        </Link>
      </div>
    </div>
  )
}
