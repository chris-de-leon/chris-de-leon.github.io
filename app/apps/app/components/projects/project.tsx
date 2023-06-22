/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

interface ProjectProps {
  readonly category: string
  readonly title: string
  readonly href: string
  readonly src: string
  readonly alt: string
}

export function Project(props: ProjectProps) {
  return (
    <div className="relative overflow-hidden border-2 text-primary group border-white/50 rounded-xl">
      <Link href={props.href} target="_blank">
        <div className="absolute z-40 w-full h-full transition-all duration-300 group-hover:bg-black/70" />
        <img
          className="w-full h-full transition-all duration-500 group-hover:scale-125"
          loading="lazy"
          src={props.src}
          alt={props.alt}
        />
        <div className="absolute z-50 transition-all duration-500 -bottom-full left-6 lg:left-12 lg:group-hover:bottom-14 group-hover:bottom-10">
          <span className="text-xs text-grad-solid">{props.category}</span>
        </div>
        <div className="absolute z-50 transition-all duration-700 -bottom-full left-6 lg:left-12 lg:group-hover:bottom-6 group-hover:bottom-2">
          <span className="text-md lg:text-xl text-primary">
            {' '}
            {props.title}
          </span>
        </div>
      </Link>
    </div>
  )
}
