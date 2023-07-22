import {
  faFolderOpen,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ toggleNavbar }: { toggleNavbar: () => void }) => {
  return (
    <div className='flex flex-col gap-4'>
      <NavLink to='/' onClick={toggleNavbar}>
        {(isActive) => {
          return (
            <div className='flex gap-4 justify-start items-center'>
              <FontAwesomeIcon
                icon={faHouse}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
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
            <div className='flex gap-4 justify-start items-center'>
              <FontAwesomeIcon
                icon={faFolderOpen}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
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
            <div className='flex gap-4 justify-start items-center'>
              <FontAwesomeIcon
                icon={faUser}
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
              />
              <p
                className={`${
                  isActive.isActive ? 'text-primaryBlue' : 'text-gray-700'
                }`}
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
