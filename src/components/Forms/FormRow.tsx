import React from 'react'

type FormRowProps = {
  name: string
  label: string
  type: string
  resetAlert?: () => void
}

const FormRow = React.forwardRef(
  (
    { name, label, type, resetAlert }: FormRowProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className='w-full flex flex-col items-start justify-center gap-2 mb-4'>
        <label htmlFor={name} className='text-gray-700 font-bold lg:text-lg'>
          {label}
        </label>
        {type === 'email' ? (
          <input
            required
            ref={ref}
            type={type}
            name={name}
            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-desaturated-dark-cyan w-full lg:text-lg'
            pattern='[^@]+@[^@]+\.[a-zA-Z]{2,6}'
            onChange={resetAlert}
          />
        ) : (
          <input
            required
            ref={ref}
            type={type}
            name={name}
            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-desaturated-dark-cyan w-full lg:text-lg'
            onChange={() => {
              if (name === 'password' && resetAlert) {
                resetAlert()
              }
            }}
          />
        )}
      </div>
    )
  }
)

export default FormRow
