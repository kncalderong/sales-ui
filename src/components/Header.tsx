import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className='relative w-full'>
      <div className='w-full px-4 py-6 bg-slate-100 shadow-md relative flex justify-end items-center md:hidden'>
        <FontAwesomeIcon
          icon={faBars}
          className={`text-2xl cursor-pointer transition-all duration-300 ${
            isMenuOpen ? 'rotate-90' : 'rotate-0'
          } `}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div
        className={`w-full flex flex-col gap-4 bg-slate-100 overflow-hidden transition-all duration-300  ${
          isMenuOpen ? 'h-[140px] px-6 py-4' : 'h-0 p-0'
        } md:h-auto md:flex-row-reverse md:bg-transparent md:justify-start md:px-14 md:py-4 md:text-2xl md:absolute md:top-10 md:left-0 md:gap-10 md:z-20`}
      >
        <a href='#login-section' className='text-primaryBlue font-extrabold'>
          Login
        </a>
        <a href='#content-1'>Content 1</a>
        <a href='#content-2'>Content 2</a>
      </div>
    </header>
  )
}

export default Header
