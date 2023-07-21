import Header from '../components/Header'

/* import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext'; */

const Landing = () => {
  //const { user } = useAppContext();
  return (
    <main className={`min-h-screen w-full`}>
      {/* {user && <Navigate to='/' />} */}
      <Header />
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
          <div className='cursor-pointer text-white bg-primaryBlue flex justify-center items-center px-8 py-4 w-[140px] mt-12 md:text-2xl'>
            Login
          </div>
        </div>
      </div>
      <div id='content-1' className='min-h-screen'></div>
      <div id='content-2' className='min-h-screen'></div>
    </main>
  )
}

export default Landing
