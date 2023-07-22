import {
  faFolderOpen,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ toggleNavbar }: { toggleNavbar: () => void }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavLink to='/' onClick={toggleNavbar}>
        {(isActive) => {
          return (
            <div
              className={`flex gap-4 justify-start items-center w-full lg:aspect-square lg:justify-center ${
                isActive.isActive && 'lg:bg-black lg:bg-opacity-25'
              }`}
            >
              <FontAwesomeIcon
                icon={faHouse}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } lg:text-white`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } block lg:hidden`}
              >
                New Sale
              </p>
            </div>
          )
        }}
      </NavLink>
      <NavLink to='/all-sales' onClick={toggleNavbar}>
        {(isActive) => {
          return (
            <div
              className={`flex gap-4 justify-start items-center w-full lg:aspect-square lg:justify-center ${
                isActive.isActive && 'lg:bg-black lg:bg-opacity-25'
              }`}
            >
              <FontAwesomeIcon
                icon={faFolderOpen}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } lg:text-white`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } block lg:hidden`}
              >
                All Sales
              </p>
            </div>
          )
        }}
      </NavLink>
      <NavLink to='/profile' onClick={toggleNavbar}>
        {(isActive) => {
          return (
            <div
              className={`flex gap-4 justify-start items-center w-full lg:aspect-square lg:justify-center ${
                isActive.isActive && 'lg:bg-black lg:bg-opacity-25'
              }`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } lg:text-white`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                } block lg:hidden `}
              >
                Profile
              </p>
            </div>
          )
        }}
      </NavLink>
    </div>
  )
}

export default NavLinks
