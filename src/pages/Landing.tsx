import { useState } from 'react'
import Header from '../components/Header'
import LandingCard from '../components/LandingCard'
import LoginRegisterForm from '../components/Forms/LoginRegisterForm'

const Landing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <main className={`min-h-screen w-full`}>
      {isModalOpen && <LoginRegisterForm toggleModal={toggleModal} />}
      <Header toggleModal={toggleModal} />
      <div
        id='login-section'
        className=' relative min-h-screen bg-[url("/bg-landing.png")] bg-no-repeat bg-[-360px_-10px] md:bg-[-75%_-10px] xl:bg-right'
      >
        <div className='flex flex-col gap-3 absolute top-1/4 w-[80%] left-[10%] translate-x-0 -translate-y-1/2 md:w-[550px] md:gap-6 md:bg-white md:rounded-[1.5rem] md:top-[50%] md:p-8 lg:left-[15%]'>
          <h1 className='text-slate-700 text-3xl md:text-[4rem] md:leading-[4rem] md:font-extrabold'>
            Lorem ipsum Design
          </h1>
          <p className='text-slate-400 md:text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <div
            className='cursor-pointer text-white bg-primaryBlue flex justify-center items-center px-8 py-4 w-[140px] mt-12 md:text-2xl'
            onClick={toggleModal}
          >
            Login
          </div>
        </div>
      </div>
      <div
        id='content-1'
        className='min-h-screen flex flex-col items-center py-10 gap-8 lg:justify-center lg:gap-12 lg:py-16'
      >
        <div className='flex flex-col gap-4 w-10/12 max-w-[1280px]'>
          <h1 className='text-slate-700 text-3xl md:text-[4rem] md:leading-[4rem] md:font-extrabold'>
            Content 1
          </h1>
          <p className='text-slate-400 md:text-lg md:max-w-[50%] lg:max-w-[35%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='flex flex-wrap w-10/12 gap-4 lg:gap-12 max-w-[1280px]'>
          <LandingCard />
          <LandingCard />
          <LandingCard />
          <LandingCard />
        </div>
      </div>
      <div
        id='content-2'
        className=' bg-blue-50 min-h-screen flex flex-col items-center py-10 gap-8 md:justify-center md:gap-12 lg:py-[8rem] '
      >
        <div className='flex flex-col gap-4 w-10/12 md:items-end max-w-[1280px]'>
          <h1 className='text-slate-700 text-3xl md:text-[4rem] md:leading-[4rem] md:font-extrabold'>
            Content 2
          </h1>
          <p className='text-slate-400 md:text-lg md:max-w-[50%] lg:max-w-[35%]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className='flex flex-wrap w-10/12 gap-6 lg:gap-14 max-w-[1280px]'>
          <div className='w-full block md:w-[calc((100%-4.5rem)/3)] lg:w-[calc((100%-7rem)/3)]'>
            <img src='/content2-cardWhite.png' alt='' className='w-full' />
          </div>
          <div className='w-full block md:w-[calc((100%-4.5rem)/3)] lg:w-[calc((100%-7rem)/3)]'>
            <img src='/content2-cardBlue.png' alt='' className='w-full' />
          </div>
          <div className='w-full block md:w-[calc((100%-4.5rem)/3)] lg:w-[calc((100%-7rem)/3)]'>
            <img src='/content2-cardWhite.png' alt='' className='w-full' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Landing
