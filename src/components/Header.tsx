import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header>
      <div className='w-full px-4 py-6 bg-slate-100 shadow-md relative flex justify-end items-center'>
        <FontAwesomeIcon
          icon={faBars}
          className={`text-2xl cursor-pointer transition-all duration-300 ${
            isMenuOpen ? 'rotate-90' : 'rotate-0'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>
      <div
        className={`w-full flex flex-col gap-4 bg-slate-100 overflow-hidden transition-all duration-300  ${
          isMenuOpen ? 'h-[140px] px-6 py-4' : 'h-0 p-0'
        }`}
      >
        <a href='#login-section' className='text-blue-500 font-extrabold'>
          Login
        </a>
        <a href='#content-1'>Content 1</a>
        <a href='#content-2'>Content 2</a>
      </div>
    </header>
  )
}

export default Header
