import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = ({ toggleModal }: { toggleModal: () => void }) => {
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
        <a
          href='#'
          className='text-primaryBlue font-extrabold'
          onClick={() => {
            setIsMenuOpen(false)
            toggleModal()
          }}
        >
          Login
        </a>
        <div className='flex flex-col gap-4 md:flex-row md:gap-10'>
          <a href='#content-1' onClick={() => setIsMenuOpen(false)}>
            Content 1
          </a>
          <a href='#content-2' onClick={() => setIsMenuOpen(false)}>
            Content 2
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
