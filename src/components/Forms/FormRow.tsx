import React from 'react'

type FormRowProps = {
  name: string
  label: string
  type: string
  /*   ref: React.RefObject<HTMLInputElement> */
}

const FormRow = React.forwardRef(
  (
    { name, label, type }: FormRowProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className='w-full flex flex-col items-start justify-center gap-2'>
        <label
          htmlFor={name}
          className='text-desaturated-dark-cyan font-bold lg:text-lg'
        >
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
          />
        ) : (
          <input
            required
            ref={ref}
            type={type}
            name={name}
            className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-desaturated-dark-cyan w-full lg:text-lg'
          />
        )}
      </div>
    )
  }
)

export default FormRow
