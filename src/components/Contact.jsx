import { useRef } from 'preact/hooks'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
const Contact = () => {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_y110txh',
        'template_9gu0i1h',
        form.current,
        '7uVZRRLf9AKrNuF4t'
      )
      .then(
        (result) => {
          toast.success('Email enviado', {
            style: {
              borderRadius: '10px',
              background: '#1e293b',
              color: '#fff'
            }
          })
        },
        (error) => {
          toast.error(error.text, {
            style: {
              borderRadius: '10px',
              background: '#1e293b',
              color: '#fff'
            }
          })
        }
      )
    e.target.reset()
  }

  return (
    <div
      id='contactame'
      className='my-7 mx-auto rounded-md bg-slate-800  font-medium text-white dark:bg-slate-800 dark:text-indigo-500 md:w-full lg:w-9/12  '
    >
      <Toaster position='top-right' reverseOrder={false} />
      <form
        ref={form}
        onSubmit={sendEmail}
        className='rounde mb-4 px-8 pt-6 pb-8 shadow-sm '
      >
        <div className='mb-4'>
          <label
            className='mb-2 block text-base dark:text-gray-100'
            for='username'
          >
            Nombre :
          </label>
          <input
            className=' focus:shadow-outline w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            id='username'
            type='text'
            name='user_name'
            placeholder='Username'
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-base dark:text-gray-100  sm:text-sm md:text-base'
            for='password'
          >
            Email :
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border py-3 px-3 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='email'
            placeholder='hola@gmail.com'
            name='user_email'
          />
        </div>
        <label
          for='message'
          class='mb-2  flex text-sm font-medium dark:text-white sm:text-sm md:text-base '
        >
          Mensaje :
        </label>
        <textarea
          name='message'
          id='message'
          rows='4'
          className=' dark:placeholder-white/55 flex w-full resize-none flex-col rounded-lg bg-gray-100 p-2.5  text-sm text-white  dark:bg-gray-700 dark:text-white'
          placeholder='Hola!! '
        />
        <div className='my-5 flex flex-row justify-center'>
          <button
            type='submit'
            value='Enviar'
            onClick={sendEmail}
            className='focus:shadow-outline  rounded-md bg-indigo-500 py-3 px-6 text-lg text-white focus:outline-none  sm:text-sm md:text-base'
          >
            Enviar
          </button>
        </div>
      </form>
      <p className='text-center text-xs text-gray-500'>
        {/* &copy;2020 Acme Corp. All rights reserved. */}
      </p>
    </div>
  )
}

export default Contact
