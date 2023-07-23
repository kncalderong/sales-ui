import React, { useRef } from 'react'
import FormRow from './FormRow'
import { v4 as uuidv4 } from 'uuid'
import { createClient } from '../../utils/createClient'

const CreateClientForm = ({
  handleCloseForm,
}: {
  handleCloseForm: () => void
}) => {
  const emailRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const streetRef = useRef<HTMLInputElement>(null)
  const streetNumberRef = useRef<HTMLInputElement>(null)
  const neighborhoodRef = useRef<HTMLInputElement>(null)
  const cityRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const clientTOSubmit = {
      RUT: uuidv4(),
      address: {
        city: cityRef.current!.value,
        neighborhood: neighborhoodRef.current!.value,
        number: `${streetNumberRef.current!.value}`,
        street: streetRef.current!.value,
      },

      email: emailRef.current!.value,
      name: nameRef.current!.value,
      lastName: lastNameRef.current!.value,
      phone: `${phoneRef.current!.value}`,
    }
    createClient(clientTOSubmit)
    handleCloseForm()
  }

  return (
    <form onSubmit={handleSubmit} className='w-full mb-4'>
      <FormRow label='Name' type='text' name='name' ref={nameRef} />
      <FormRow
        label='Last Name'
        type='text'
        name='lastName'
        ref={lastNameRef}
      />
      <FormRow label='Phone' type='number' name='phone' ref={phoneRef} />
      <FormRow label='Email' type='email' name='email' ref={emailRef} />
      <p className='font-extrabold text-primaryBlue mb-4 uppercase'>
        Addres Information
      </p>
      <FormRow label='Street' type='text' name='street' ref={streetRef} />
      <FormRow
        label='Number'
        type='number'
        name='streetNumber'
        ref={streetNumberRef}
      />
      <FormRow
        label='Neighborhood'
        type='text'
        name='neighborhood'
        ref={neighborhoodRef}
      />
      <FormRow label='City' type='text' name='city' ref={cityRef} />
      <button
        type='submit'
        className='bg-primaryBlue cursor-pointer text-white rounded-md px-6 py-3 mt-4'
      >
        Submit
      </button>
    </form>
  )
}

export default CreateClientForm
