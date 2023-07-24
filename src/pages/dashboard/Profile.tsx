import { useAppContext } from '../../context/appContext'

const Profile = () => {
  const { logoutUser } = useAppContext()

  return (
    <section className='w-full bg-slate-100 flex justify-center items-start pt-[20%] lg:py-[5.5rem]'>
      <div className='w-full max-w-[80%] lg:max-w-[880px] 2xl:max-w-[1024px]'>
        <div
          className='py-4 px-8 bg-primaryBlue w-[40%] flex justify-center items-center text-white cursor-pointer lg:w-[180px]'
          onClick={() => {
            logoutUser()
          }}
        >
          Logout
        </div>
      </div>
    </section>
  )
}

export default Profile
