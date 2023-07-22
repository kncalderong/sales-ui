import React from 'react'

const Spinner = () => {
  return (
    <div className='jumpy-bars flex justify-evenly w-[4.5rem] h-[3.5rem] gap-[0.3em] m-8'>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar1'
        style={{ animationDelay: '0.2s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar2'
        style={{ animationDelay: '0.4s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar3'
        style={{ animationDelay: '0.6s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar4'
        style={{ animationDelay: '0.8s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar5'
        style={{ animationDelay: '1s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar6'
        style={{ animationDelay: '1.2s' }}
      ></div>
      <div
        className='bar w-[1em] h-auto opacity-0 bg-gray-600 rounded-full animate-spinnerAnimation'
        id='bar7'
        style={{ animationDelay: '1.5s' }}
      ></div>
    </div>
  )
}

export default Spinner
