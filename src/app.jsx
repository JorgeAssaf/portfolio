import { useEffect, useState } from 'preact/hooks'
import {
  Contact,
  Footer,
  HeroBanner,
  Navbar,
  Proyects,
  Technologies,
} from './components'

export function App() {
  const logo = '<Assaf />'
  const [theme, setTheme] = useState(null)

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
          <Proyects />
          <Technologies />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}
