import { BannerDescription } from './description'
import { BannerSubtitle } from './subtitle'
import { BannerContact } from './contact'
import { BannerSocials } from './socials'
import { BannerImage } from './image'
import { BannerTitle } from './title'

export function Banner() {
  return (
    <section className="section" id="banner">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="text-primary">
            <BannerTitle animationDelay={0.1} />
            <BannerSubtitle animationDelay={0.2} />
            <BannerDescription animationDelay={0.3} />
            <BannerContact animationDelay={0.4} />
            <BannerSocials animationDelay={0.5} />
          </div>
          <div>
            <BannerImage animationDelay={0.1} />
          </div>
        </div>
      </div>
    </section>
  )
}
