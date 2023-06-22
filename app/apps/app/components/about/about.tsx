import { useInView } from 'react-intersection-observer'
import { AboutContent } from './content'
import { AboutImage } from './image'

export function About() {
  const [ref, inView] = useInView({
    threshold: 0.3,
  })

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-y-8 lg:flex-row lg:items-center lg:gap-x-32">
          <AboutContent inView={inView} />
          <AboutImage animationDelay={0.1} />
        </div>
      </div>
    </section>
  )
}
