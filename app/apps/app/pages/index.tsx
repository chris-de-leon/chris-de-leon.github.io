import {
  Experience,
  Projects,
  Contact,
  Banner,
  NavBar,
  Header,
  About,
} from '../components'

export function Index() {
  return (
    <>
      <Header />
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}

export default Index
