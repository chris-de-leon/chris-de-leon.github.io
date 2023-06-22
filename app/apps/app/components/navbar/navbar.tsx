import { BsFillPersonFill } from 'react-icons/bs'
import { NavBarBookmark } from './bookmark'
import { TiMessage } from 'react-icons/ti'
import { MdWork } from 'react-icons/md'
import { BiHome } from 'react-icons/bi'
import { FaCode } from 'react-icons/fa'

export function NavBar() {
  return (
    <nav className="fixed z-50 w-full bottom-2 lg:bottom-8">
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-around w-full rounded-full bg-black/20 h-[50px] max-w-[460px] backdrop-blur-2xl mx-auto text-2xl">
          <NavBarBookmark sectionId="" sectionName="Home" icon={<BiHome />} />
          <NavBarBookmark
            sectionId="#about"
            sectionName="About"
            icon={<BsFillPersonFill />}
          />
          <NavBarBookmark
            sectionId="#experience"
            sectionName="Experience"
            icon={<MdWork />}
          />
          <NavBarBookmark
            sectionId="#projects"
            sectionName="Work"
            icon={<FaCode />}
          />
          <NavBarBookmark
            sectionId="#contact"
            sectionName="Contact"
            icon={<TiMessage />}
          />
        </div>
      </div>
    </nav>
  )
}
