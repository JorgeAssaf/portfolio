import Code from '../assets/images/Code.png'
import Responsive from '../assets/images/Responsive.png'
import Seo from '../assets/images/Seo.png'
const Services = () => {
  return (
    <section className='bg mx-auto grid w-9/12 grid-cols-3 gap-5 text-center '>
      <article className='rounded-md bg-slate-800'>
        <img className='mx-auto w-20 items-center' src={Code} alt='' />
        <h2>Desarrollo web</h2>
        <p className=''>Creacion de sitios web estaticos </p>
      </article>
      <article className='rounded-md bg-slate-800'>
        <img className='mx-auto w-20 items-center' src={Responsive} alt='' />
        <h2>Responsive Web Design</h2>
      </article>
      <article className='rounded-md bg-slate-800'>
        <img className='mx-auto w-20 items-center' src={Seo} alt='' />
        <h2>Seo y Optimizacion</h2>
      </article>
    </section>
  )
}

export default Services
