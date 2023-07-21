import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMountainSun } from '@fortawesome/free-solid-svg-icons'

const LandingCard = () => {
  return (
    <div className='flex flex-col gap-4 w-full md:w-[calc(50%-1rem)] lg:w-[calc((100%-9rem)/4)]'>
      <div className='aspect-square bg-primaryBlue flex justify-center items-center'>
        <FontAwesomeIcon
          icon={faMountainSun}
          color='#fff'
          className='text-[3rem]'
        />
      </div>
      <p className='text-slate-400 md:text-lg'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  )
}

export default LandingCard
