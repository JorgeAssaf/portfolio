import { useState } from 'preact/hooks'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

const Navbar = ({ name, handleThemeSwitch, theme }) => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div
      data-aos='fade-down'
      className=' mb-16 font-medium text-indigo-700 dark:text-indigo-500 md:text-5xl '
    >
      <nav>
        <header className=' flex flex-row items-center justify-between '>
          <h2 className=' text-3xl'>{name}</h2>
          <ul className=' list-none text-lg sm:hidden md:flex md:gap-2 md:text-base lg:gap-4'>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#proyectos'>Proyectos</a>
            </li>
            <li>
              <a href='#servicios'>Servicios</a>
            </li>
            <li>
              <a href='#tecnologias'>Tecnologias</a>
            </li>
            <li>
              <a href='#contactame'>Contactame</a>
            </li>
            {/* //Todo Hacer la Internalización */}
            {/* <li>🇪🇸</li> */}
            <li
              onClick={handleThemeSwitch}
              className='cursor-pointer rounded-lg bg-indigo-500 px-0.5 py-0.5  '
            >
              {' '}
              {theme === 'dark' ? '🌙' : '🌞'}
            </li>
          </ul>
          <div onClick={handleNav} className='z-10 md:hidden'>
            {nav
              ? (
                <AiOutlineClose className='text-indigo-600' size={25} />
                )
              : (
                <HiOutlineMenuAlt4 size={25} />
                )}
          </div>
        </header>
      </nav>

      <div
        onClick={handleNav}
        className={
          nav
            ? 'absolute left-0 top-0 mx-auto flex max-h-screen w-full flex-col bg-gray-800 py-5 px-[1.5rem] text-indigo-500 transition'
            : 'absolute left-[-100%] transition'
        }
      >
        <ul className='mt-6 text-center text-white'>
          <li className='mb-4'>
            <a href='#'>Home</a>
          </li>
          <li className='mb-4'>
            <a href='#proyectos'>Proyectos</a>
          </li>
          <li className='mb-4'>
            <a href='#servicios'>Servicios</a>
          </li>
          <li className='mb-4'>
            <a href='#tecnologias'>Tecnologias</a>{' '}
          </li>
          <li className='mb-4'>
            <a href='#contactame'>Contactame</a>
          </li>
          {/* //Todo Hacer la Internalización */}
          {/* <li className='mb-4'>🇪🇸</li> */}
          <li
            onClick={handleThemeSwitch}
            className=' mx-auto mb-5 w-7/12 cursor-pointer rounded-lg bg-indigo-500 px-0.5 py-0.5'
          >
            {' '}
            {theme === 'dark' ? '🌞' : '🌙'}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
