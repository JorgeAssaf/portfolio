import { technologies } from '../data'
const Technologies = () => {
  return (
    <>
      <h2
        id='tecnologias'
        className='my-7 flex justify-center text-4xl font-medium text-indigo-700 dark:text-indigo-500  '
      >
        Tecnologias
      </h2>
      <div
        data-aos='flip-down'
        data-aos-duration='1000'
        className=' grid-cols-2 sm:flex sm:flex-col md:mx-auto md:grid md:w-9/12 md:gap-10  '
      >
        {technologies.map((technology) => {
          return (
            <section key={technology.id} className=' my-3 text-center '>
              <div class='mx-auto  w-1/2 rounded-md bg-slate-800 p-6 sm:w-full'>
                <img
                  src={technology.image}
                  alt='HTML'
                  width='55'
                  height='55'
                  className='mx-auto '
                />
                <h2 class=' mt-5  text-center text-lg font-bold uppercase md:text-base'>
                  {technology.language}
                </h2>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}

export default Technologies
