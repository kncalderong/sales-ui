import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FormRow from './FormRow'
import React, { useState, useRef } from 'react'

const LoginRegisterForm = ({ toggleModal }: { toggleModal: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const streeRef = useRef<HTMLInputElement>(null)
  const streetNumberRef = useRef<HTMLInputElement>(null)
  const neighborhoodRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const birthDateRef = useRef<HTMLInputElement>(null)

  const loginOrRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(emailRef.current!.value)
  }
  return (
    <aside
      className={` fixed w-full h-screen z-40 left-0 top-0 bg-gray-800 bg-opacity-25 flex justify-center items-center`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          toggleModal()
        }
      }}
    >
      <div className='bg-white p-6 opacity-100 z-50'>
        <div className='flex justify-end'>
          <FontAwesomeIcon icon={faXmark} onClick={toggleModal} />
        </div>
        <form onSubmit={loginOrRegister}>
          {!isLogin && (
            <FormRow label='Name' type='text' name='name' ref={nameRef} />
          )}
          {!isLogin && (
            <FormRow
              label='Last Name'
              type='text'
              name='lastName'
              ref={lastNameRef}
            />
          )}
          {!isLogin && (
            <FormRow label='Phone' type='number' name='phone' ref={phoneRef} />
          )}
          {!isLogin && (
            <FormRow
              label='Birth Date'
              type='date'
              name='birthDate'
              ref={birthDateRef}
            />
          )}
          <FormRow label='Email' type='email' name='email' ref={emailRef} />
          <FormRow
            label='Password'
            type='password'
            name='password'
            ref={passwordRef}
          />
          <p>Addres Information</p>
          {!isLogin && (
            <FormRow label='Street' type='text' name='street' ref={streeRef} />
          )}
          {!isLogin && (
            <FormRow
              label='Number'
              type='number'
              name='streetNumber'
              ref={streetNumberRef}
            />
          )}
          {!isLogin && (
            <FormRow
              label='Neighborhood'
              type='text'
              name='neighborhood'
              ref={neighborhoodRef}
            />
          )}
          {!isLogin && (
            <FormRow label='City' type='text' name='city' ref={cityRef} />
          )}

          <button type='submit'>Submit</button>
        </form>
        <div>
          <p>
            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
            <span
              onClick={() => setIsLogin(!isLogin)}
              className='cursor-pointer text-primaryBlue font-semibold'
            >
              {isLogin ? 'Register' : 'Login'}
            </span>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default LoginRegisterForm
