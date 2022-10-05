import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

const Footer = ({ name }) => {
  return (
    <footer className='bg-white p-4  dark:bg-slate-900  sm:p-6'>
      <div className='w-full md:flex md:justify-between'>
        <div className='mb-6 md:mb-0'>
          <span className='self-center whitespace-nowrap text-3xl font-semibold text-gray-900 dark:text-white'>
            {name}
          </span>
        </div>
      </div>
      <hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
      <div className='sm:flex sm:items-center sm:justify-between'>
        <span className='text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
          © 2022 No hay copy 🙌🏼. Hecho con las manitas 👌🏼
        </span>
        <div className='mt-4 flex space-x-3 sm:mt-0  sm:justify-center'>
          <a
            target='_blank'
            href='https://www.facebook.com/profile.php?id=100011227742232'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            rel='noreferrer'
          >
            <FaFacebook className='h-5 w-5' />
            <span className='sr-only'>Facebook page</span>
          </a>
          <a
            target='_blank'
            href='https://www.instagram.com/jorgeassaf0/'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            rel='noreferrer'
          >
            <FaInstagram className='h-5 w-5' />
            <span className='sr-only'>Instagram page</span>
          </a>
          <a
            target='_blank'
            href='https://twitter.com/AssafEnrique'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            rel='noreferrer'
          >
            <FaTwitter className='h-5 w-5' />
            <span className='sr-only'>Twitter page</span>
          </a>
          <a
            target='_blank'
            href='https://github.com/JorgeAssaf'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            rel='noreferrer'
          >
            <FaGithub className='h-5 w-5' />
            <span className='sr-only'>GitHub account</span>
          </a>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/jorge-enrique-assaf-salinas-4bba17215/'
            className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            rel='noreferrer'
          >
            <FaLinkedinIn className='h-5 w-5' />
            <span className='sr-only'>Linkedin account</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
