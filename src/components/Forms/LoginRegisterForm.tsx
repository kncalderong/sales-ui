import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FormRow from './FormRow'
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getSeller, setSeller } from '../../utils/handleSeller'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner'

const alertInitialState = {
  alertOn: false,
  alertMessage: '',
}

const LoginRegisterForm = ({ toggleModal }: { toggleModal: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showAlert, setShowAlert] = useState(alertInitialState)
  const [isLoading, setIsLoading] = useState(false)

  const { setupUser, seller } = useAppContext()
  const navigate = useNavigate()

  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const streetRef = useRef<HTMLInputElement>(null)
  const streetNumberRef = useRef<HTMLInputElement>(null)
  const neighborhoodRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const birthDateRef = useRef<HTMLInputElement>(null)

  const handleLoginOrRegister = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    if (isLogin) {
      const objectToSubmit = {
        email: emailRef.current!.value,
        hashedPassword: passwordRef.current!.value,
      }
      const res = getSeller(objectToSubmit.email, objectToSubmit.hashedPassword)
      console.log('res: ', res)
      if (res.status === 200) {
        setupUser(res.seller!)
      }
      if (res.status === 500) {
        setShowAlert({
          alertOn: true,
          alertMessage: res.msg || 'Invalid credentials',
        })
      }
    }
    if (!isLogin) {
      const objectTOSubmit = {
        RUT: uuidv4(),
        address: {
          city: cityRef.current!.value,
          neighborhood: neighborhoodRef.current!.value,
          number: `${streetNumberRef.current!.value}`,
          street: streetRef.current!.value,
        },
        birthDate: birthDateRef.current!.value,
        email: emailRef.current!.value,
        name: nameRef.current!.value,
        lastName: lastNameRef.current!.value,
        phone: `${phoneRef.current!.value}`,
        hashedPassword: passwordRef.current!.value,
      }
      const res = setSeller(objectTOSubmit)
      setupUser(res.seller)
    }
  }

  const resetAlert = () => {
    if (showAlert.alertOn) {
      setShowAlert(alertInitialState)
    }
  }

  useEffect(() => {
    if (seller) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        navigate('/')
      }, 1000)
    }
  }, [seller, navigate])

  return (
    <aside
      className={` fixed w-full h-screen z-40 left-0 top-0 bg-gray-800 bg-opacity-25 flex justify-center items-center`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          toggleModal()
        }
      }}
    >
      <div
        className={`bg-white p-6 opacity-100 z-50 min-w-[50%] min-h-[25%] justify-start items-center overflow-auto max-h-[80%] flex flex-col rounded-md shadow-xl lg:p-12 ${
          isLogin && 'lg:min-w-[25%]'
        }`}
      >
        <div className='flex justify-end w-full'>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={toggleModal}
            className='text-primaryBlue text-[2rem] cursor-pointer'
          />
        </div>
        {showAlert.alertOn && (
          <div className='my-4 text-red-950 bg-red-200 border-[1px] border-red-800 px-6 py-3 rounded-lg'>
            {showAlert.alertMessage}
          </div>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <form onSubmit={handleLoginOrRegister} className='w-full mb-4'>
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
              <FormRow
                label='Phone'
                type='number'
                name='phone'
                ref={phoneRef}
              />
            )}
            {!isLogin && (
              <FormRow
                label='Birth Date'
                type='date'
                name='birthDate'
                ref={birthDateRef}
              />
            )}
            <FormRow
              label='Email'
              type='email'
              name='email'
              ref={emailRef}
              resetAlert={resetAlert}
            />
            <FormRow
              label='Password'
              type='password'
              name='password'
              ref={passwordRef}
              resetAlert={resetAlert}
            />
            {!isLogin && (
              <p className='font-extrabold text-primaryBlue mb-4 uppercase'>
                Addres Information
              </p>
            )}
            {!isLogin && (
              <FormRow
                label='Street'
                type='text'
                name='street'
                ref={streetRef}
              />
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

            <button
              type='submit'
              className='bg-primaryBlue cursor-pointer text-white rounded-md px-6 py-3 mt-4'
            >
              Submit
            </button>
          </form>
        )}

        {!isLoading && (
          <div>
            <p className='lg:text-lg lg:mt-4 lg:font-extrabold text-gray-700'>
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className='cursor-pointer text-primaryBlue font-semibold lg:text-lg lg:mt-4 lg:font-extrabold'
              >
                {isLogin ? 'Register' : 'Login'}
              </span>
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default LoginRegisterForm
