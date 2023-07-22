import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import FormRow from './FormRow'
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { getSeller } from '../../utils/sellerSignup'
import { useAppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'

const alertInitialState = {
  alertOn: false,
  alertMessage: '',
}

const LoginRegisterForm = ({ toggleModal }: { toggleModal: () => void }) => {
  const [isLogin, setIsLogin] = useState(true)
  const [showAlert, setShowAlert] = useState(alertInitialState)

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
    const objectToSubmit = isLogin
      ? {
          email: emailRef.current!.value,
          hashedPassword: passwordRef.current!.value,
        }
      : {
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
    if (isLogin) {
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
  }

  const resetAlert = () => {
    if (showAlert.alertOn) {
      setShowAlert(alertInitialState)
    }
  }

  useEffect(() => {
    if (seller) {
      setTimeout(() => {
        navigate('/')
      }, 200)
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
      <div className='bg-white p-6 opacity-100 z-50 min-w-[50%] min-h-[25%] justify-center items-center flex flex-col'>
        <div className='flex justify-end w-full'>
          <FontAwesomeIcon icon={faXmark} onClick={toggleModal} />
        </div>
        {showAlert.alertOn && <div>{showAlert.alertMessage}</div>}
        <form onSubmit={handleLoginOrRegister} className='w-full'>
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
          <p>Addres Information</p>
          {!isLogin && (
            <FormRow label='Street' type='text' name='street' ref={streetRef} />
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
