import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface NavBarBookmarkProps {
  readonly sectionName: string
  readonly sectionId: string
  readonly icon: JSX.Element
}

export function NavBarBookmark(props: PropsWithChildren<NavBarBookmarkProps>) {
  const [highlight, setHighlight] = useState('')
  const router = useRouter()

  // https://nextjs.org/docs/messages/react-hydration-error#possible-ways-to-fix-it
  useEffect(() => {
    if (router.asPath === `/${props.sectionId}`) {
      setHighlight(
        'rounded-full bg-gradient-to-r from-accent-4 to-accent-2 text-white'
      )
    } else {
      setHighlight('')
    }
  }, [router, props.sectionId])

  return (
    <Link
      className={`relative w-[40px] h-[40px] flex items-center justify-center text-primary/50 ${highlight}`}
      href={props.sectionId}
    >
      {/* https://github.com/tailwindlabs/tailwindcss/discussions/2361#discussion-18622 */}
      <div className="absolute inset-0 flex items-center justify-center w-full h-full transition-all duration-300 ease-linear rounded-full opacity-0 hover:text-white bg-gradient-to-r from-accent-4 to-accent-2 hover:opacity-100">
        <span className="absolute text-white rounded-full bottom-12 min-w-max">
          {props.sectionName}
        </span>
        {props.icon}
      </div>
      {props.icon}
    </Link>
  )
}
