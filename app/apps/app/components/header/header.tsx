/* eslint-disable @next/next/no-img-element */
import { LINKS } from 'apps/app/content'
import Link from 'next/link'

export function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-between">
          <Link href={LINKS.LINKEDIN.HOME} target="_blank">
            <img
              src="/logo.png"
              alt="logo"
              loading="lazy"
              width={40}
              height={40}
            />
          </Link>
          <Link className="rounded-btn-grad" href="#contact">
            Let&apos;s Build Something
          </Link>
        </div>
      </div>
    </header>
  )
}
