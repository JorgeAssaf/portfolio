import Code from '../assets/images/Code.png'
import Responsive from '../assets/images/Responsive.png'
import Seo from '../assets/images/Seo.png'
const Services = () => {
  return (
    <>
      <h2
        data-aos='fade-left'
        data-aos-duration='500'
        id='servicios'
        className='my-7 flex justify-center text-4xl font-medium text-indigo-700 dark:text-indigo-500  '
      >
        Servicios
      </h2>
      <section
        data-aos='flip-up'
        data-aos-duration='950'
        className='bg mx-auto w-9/12 grid-cols-3 gap-2 text-center sm:flex sm:flex-col sm:gap-5 md:grid '
      >
        <article className='rounded-md bg-slate-800 px-2 '>
          <img className='mx-auto my-3 w-16 items-center' src={Code} alt='' />
          <h2>Desarrollo web</h2>
          <p className='mt-3 mb-4 text-center text-sm text-gray-200'>
            Creación y desarrollo web frontend así como la utilización del
            sistema de gestión de contenidos (WordPress)
          </p>
        </article>
        <article
          data-aos='flip-up'
          data-aos-duration='1150'
          className='rounded-md bg-slate-800 px-2 '
        >
          <img
            className='mx-auto my-3 w-16 items-center'
            src={Responsive}
            alt=''
          />
          <h2>Responsive Web Design</h2>
          <p className='mt-3 mb-4 text-center text-sm text-gray-200'>
            Creación de diseños web, receptivos atractivos y responsivos.
          </p>
        </article>
        <article
          data-aos='flip-up'
          data-aos-duration='1350'
          className='rounded-md  bg-slate-800 px-2 '
        >
          <img className='mx-auto my-3 w-16 items-center' src={Seo} alt='' />
          <h2>Seo y Optimizacion</h2>
          <p className='mt-3 mb-4 text-center text-sm text-gray-200'>
            Optimización de páginas web junto con el posicionamiento en los
            navegadores web
          </p>
        </article>
      </section>
    </>
  )
}

export default Services
