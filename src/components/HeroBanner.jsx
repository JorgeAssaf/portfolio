const HeroBanner = () => {
  return (
    <div className='md:ml-1.5 md:w-[100%] sm:w-full sm:mx-auto sm:text-left text-xl text-left sm:text-[0.9rem] sm:leading-6 '>
      <section className='flex md:items-center  sm:flex-col md:flex   '>
        <article className=' text-black font-medium dark:text-white lg:max-w-2xl md:mb-7'>
          <h1
            data-aos='fade-left'
            className='md:text-[1.7rem] md:leading-8 md:mb-4 sm:text-xl sm:text-center'
          >
            Hola ✨ soy Jorge Enrique Assaf Salinas
            {''}
            <span className='text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-indigo-700'>
              {' '}
              Desarrolador Web
            </span>
          </h1>
          <p
            data-aos='fade-right'
            className='mt-3 md:font-normal md:text-base sm:text-[0.85rem]'
          >
            {' '}
            <span className='text-xl'>¿Quién soy? 🤔</span>
            <p className='mt-3'>
              Soy Jorge Assaf, un desarrollador Web enfocado en el Front-end UI
              y UX. Durante este año he estado apacionado por aprender
              Javascript, React, Next, Astro tambien un monton de otras
              herramientas con el fin de lograr mi objetivo de ser programador
              FullStack 👨‍💻
            </p>
          </p>
        </article>
        <img
          data-aos='fade-up'
          className='md:[borderRadius:1rem] sm:[borderRadius:50%] sm:w-60 sm:mx-auto sm:mt-6 md:mt-0 md:w-[13rem] md:h-[13rem] lg:w-64 lg:h-64 md:mx-20'
          src='https://avatars.githubusercontent.com/u/83357738?s=400&u=63446e9c21c765eefc5b0c7ef879302a015ac70f&v=4'
          alt='Jorge'
        />
      </section>
      <div className='flex flex-row justify-center '>
        <a
          data-aos='fade-up-left'
          className=' font-[500] mt-10 mx-0 text-base mb-6 py-3 px-8 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-lg hover:from-indigo-800 hover:to-indigo-800'
          href='../assets/docs/Jorge_Assaf_CV.pdf'
          download='Cv_Assaf.pdf'
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  )
}

export default HeroBanner
