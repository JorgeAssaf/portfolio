const HeroBanner = () => {
  return (
    <div className='md:ml-1.5 md:w-[100%] sm:w-full sm:mx-auto sm:text-left text-xl text-left sm:text-[0.9rem] sm:leading-6 '>
      <section className='flex md:items-center md:justify-between sm:flex-col md:flex md:flex-row '>
        <article className=' text-black font-medium dark:text-white '>
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
          className='md:[borderRadius:1rem] sm:[borderRadius:50%]  sm:w-60 sm:mx-auto sm:mt-6 md:mt-0 md:w-[13rem] md:h-[13rem] p-2 '
          src='https://unavatar.io/github/JorgeAssaf'
          alt='Jorge'
        />
      </section>
      <a
        data-aos='fade-up-left'
        className=' font-[500] text-base inline-block my-6 py-2 px-4 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 rounded-lg hover:from-indigo-800 hover:to-indigo-800'
        href='../assets/docs/Jorge_Assaf_CV.pdf'
        download='Cv_Assaf.pdf'
      >
        Descarga mi CV
      </a>
    </div>
  )
}

export default HeroBanner
