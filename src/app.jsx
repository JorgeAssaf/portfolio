import { useEffect, useState } from 'preact/hooks'
import {
  Contact,
  Footer,
  HeroBanner,
  Navbar,
  Projects,
  Technologies,
} from './components'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  delay: 100,
})

export function App() {
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
      <div className='bg-white dark:bg-slate-900 min-h-screen font-inter text-white lg:[zoom:1.2] ult:[zoom:2.5] 5k:[zoom:4] '>
        <div className=' max-w-9xl w-8/12 mx-auto py-5 sm:w-11/12 md:w-10/12'>
          <Navbar
            name={logo}
            handleThemeSwitch={handleThemeSwitch}
            theme={theme}
          />
          <HeroBanner />
          {/* <h2 className='text-4xl mb-6 flex justify-center'>Cooming soon!!!</h2> */}
          <Projects />
          <Technologies />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
