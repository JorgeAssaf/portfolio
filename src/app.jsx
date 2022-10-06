/* eslint-disable no-undef */
import { useEffect, useState } from 'preact/hooks'
import {
  Contact,
  Footer,
  HeroBanner,
  Navbar,
  Projects,
  Services,
  Technologies
} from './components'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  delay: 150
})

export const App = () => {
  const logo = '<Assaf />'
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  const handleThemeSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <div className='font-inter min-h-screen bg-white text-white dark:bg-slate-900 lg:[zoom:1.2] ult:[zoom:2.0] 5k:[zoom:4] '>
        <div className='  max-w-9xl mx-auto w-8/12 py-5 sm:w-11/12 md:w-10/12'>
          <Navbar
            name={logo}
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
          />
          <HeroBanner />
          {/* <h2 className='text-4xl mb-6 flex justify-center'>Cooming soon!!!</h2> */}
          <Projects />
          <Services />
          <Technologies />
          <Contact />
          <Footer name={logo} />
        </div>
      </div>
    </>
  )
}
