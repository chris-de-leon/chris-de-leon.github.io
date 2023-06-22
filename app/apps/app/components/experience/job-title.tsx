import { BsArrowUpRight } from 'react-icons/bs'
import Link from 'next/link'

interface JobTitleProps {
  readonly title: string
  readonly description: string | JSX.Element
  readonly url: string
}

export function JobTitle(props: JobTitleProps) {
  return (
    <div className="pt-10 pb-5 border-b border-white/20">
      <div className="flex flex-row items-center pb-5 gap-x-5">
        <Link href={props.url} target="_blank">
          <div className="flex justify-center p-1 rounded-full bg-gradient-to-r from-accent-4 to-accent-2">
            <BsArrowUpRight />
          </div>
        </Link>
        <h3 className="text-lg font-bold">{props.title}</h3>
      </div>
      <p className="text-xs lg:text-xs">{props.description}</p>
    </div>
  )
}
