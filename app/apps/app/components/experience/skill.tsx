import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'

interface SkillProps {
  readonly title: string
  readonly description: string | JSX.Element
  readonly url: string
}

export function Skill(props: SkillProps) {
  return (
    <div className="flex items-center pt-10 pb-5 border-b border-white/20">
      <div>
        <h3 className="pb-5 text-xl font-bold">{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <div className="flex flex-col pb-5 pl-1 gap-x-6">
        <Link href={props.url} target="_blank">
          <div className="flex justify-center pt-2 pb-2 rounded-full bg-gradient-to-r from-accent-4 via-accent-5 to-accent-6">
            <BsArrowUpRight />
          </div>
          <p className="text-grad">Learn More</p>
        </Link>
      </div>
    </div>
  )
}
