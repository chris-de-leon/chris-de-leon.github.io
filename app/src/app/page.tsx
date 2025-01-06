import { Testimonials } from "@app/components/sections/testimonials"
import { Experience } from "@app/components/sections/experience"
import { Contact } from "@app/components/sections/contact"
import { Banner } from "@app/components/sections/banner"
import { About } from "@app/components/sections/about"
import { Work } from "@app/components/sections/work"

export default function Home() {
  return (
    <main>
      <Banner />
      <About />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
    </main>
  )
}
