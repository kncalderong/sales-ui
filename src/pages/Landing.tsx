import Header from '../components/Header'

/* import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext'; */

const Landing = () => {
  //const { user } = useAppContext();
  return (
    <main
      className={`bg-[url("/bg-landing.png")] bg-cover bg-[-360px] lg:bg-[0px]  min-h-screen w-full`}
    >
      {/* {user && <Navigate to='/' />} */}
      <Header />
      <div id='login-section' className='min-h-screen'></div>
      <div id='content-1' className='min-h-screen'></div>
      <div id='content-2' className='min-h-screen'></div>
    </main>
  )
}

export default Landing
