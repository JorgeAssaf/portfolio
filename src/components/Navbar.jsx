import { useState } from 'preact/hooks'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
const Navbar = ({ name, handleThemeSwitch, theme }) => {
  const [nav, setNav] = useState(false)
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav)
    setLogo(!logo)
  }
  return (
    <div
      data-aos='fade-down'
      className=' md:text-4xl mb-20 text-indigo-700 font-medium dark:text-indigo-500 '
    >
      <nav>
        <header className='flex flex-row items-center justify-between '>
          <h2 className=' text-3xl'>{name}</h2>
          <ul className='md:flex text-lg gap-5 list-none sm:hidden  '>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#proyectos'>Proyectos</a>
            </li>
            <li>
              <a href='#tecnologias'>Tecnologias</a>{' '}
            </li>
            <li>
              <a href='#contactame'>Contactame</a>
            </li>
            <li
              onClick={handleThemeSwitch}
              className=' bg-indigo-500 rounded-lg px-0.5 py-0.5 cursor-pointer  '
            >
              {' '}
              {theme === 'dark' ? '🌙' : '🌞'}
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? (
              <AiOutlineClose className='text-indigo-600' size={25} />
            ) : (
              <HiOutlineMenuAlt4 size={25} />
            )}
          </div>
        </header>
      </nav>

      <div
        onClick={handleNav}
        className={
          nav
            ? 'transition absolute text-indigo-500  left-0 top-0 w-full bg-gray-800 max-h-screen  flex flex-col mx-auto py-5 px-[0.83rem]'
            : ' transition absolute left-[-100%]'
        }
      >
        <h2 className='text-3xl mb-7'>{name}</h2>
        <ul className='text-center  text-white'>
          <li className='mb-4'>
            <a href='#'>Home</a>
          </li>
          <li className='mb-4'>
            <a href='#proyectos'>Proyectos</a>
          </li>
          <li className='mb-4'>
            <a href='#tecnologias'>Tecnologias</a>{' '}
          </li>
          <li className='mb-4'>
            <a href='#contactame'>Contactame</a>
          </li>
          <li
            onClick={handleThemeSwitch}
            className=' bg-indigo-500 rounded-lg px-0.5 py-0.5 cursor-pointer mb-5 '
          >
            {' '}
            {theme === 'dark' ? '🌙' : '🌞'}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
