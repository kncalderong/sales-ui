import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import NavLinks from './NavLinks'

const Sidebar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }
  return (
    <nav className='w-full bg-primaryBlue px-6 py-3 shadow-md lg:w-[5%] lg:px-0 lg:py-[4rem]'>
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className={`text-2xl cursor-pointer transition-all duration-500 text-white block lg:hidden ${
            isNavbarOpen ? 'rotate-90' : 'rotate-0'
          } `}
          onClick={toggleNavbar}
        />
      </div>

      {/* DESKTOP navbar (Fixed) */}
      <div className='hidden lg:block'>
        <NavLinks toggleNavbar={toggleNavbar} />
      </div>

      {/* MOBILE navBar (Collapsible) */}
      <aside
        className={`${
          isNavbarOpen ? 'w-full' : 'w-0'
        }  fixed h-screen z-40 left-0 top-0 bg-gray-800 bg-opacity-25 flex justify-start items-center transition-all duration-700 ease-in-out lg:hidden`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            setIsNavbarOpen(!isNavbarOpen)
          }
        }}
      >
        <div
          className={`h-screen ${
            isNavbarOpen ? 'w-[60%] sm:w-[40%] p-6' : 'w-0 p-0'
          } bg-white flex flex-col gap-4 overflow-hidden`}
        >
          <div className='w-full flex justify-end'>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={toggleNavbar}
              className='text-primaryBlue text-[2rem] cursor-pointer'
            />
          </div>
          <NavLinks toggleNavbar={toggleNavbar} />
        </div>
      </aside>
    </nav>
  )
}

export default Sidebar
