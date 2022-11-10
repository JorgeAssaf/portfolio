const HeroBanner = () => {
  return (
    <div className='text-left text-xl sm:mx-auto sm:w-full sm:text-left sm:text-[0.9rem] sm:leading-6 md:ml-1.5 md:w-full '>
      <section className=' flex sm:flex-col md:flex md:items-center'>
        <article className=' font-medium text-black dark:text-white md:mb-7 lg:max-w-2xl'>
          <h1
            data-aos='fade-left'
            className='sm:text-center sm:text-xl md:mb-4 md:text-[1.7rem] md:leading-8'
          >
            Hola ✨ soy Jorge Enrique Assaf Salinas
            <span className='bg-gradient-to-br from-indigo-400 to-indigo-700 bg-clip-text text-transparent'>
              {' '}
              Desarrolador Web
            </span>
          </h1>
          <p
            data-aos='fade-right'
            className=' mt-3 sm:text-[0.85rem] md:text-base md:font-normal'
          >
            {' '}
            <span className=' text-lg text-indigo-400'>¿Quién soy? 🤔</span>
            <p className='mt-3'>
              Soy Jorge Assaf, un desarrollador Web enfocado en el Front-end UI
              y UX. Durante este año me he apasionado por aprender Javascript,
              React, Next, Astro junto con un montón de otras herramientas y
              tecnologías con el fin de lograr mi objetivo de ser programador
              FullStack 👨‍💻
            </p>
          </p>
        </article>
        <img
          data-aos='fade-up'
          className='h-auto w-auto sm:mx-auto sm:mt-6 sm:w-60 sm:[borderRadius:50%] md:mx-20 md:mt-0 md:h-[13rem] md:w-[13rem] md:[borderRadius:1rem] lg:h-64 lg:w-64'
          src='https://avatars.githubusercontent.com/u/83357738?s=400&u=63446e9c21c765eefc5b0c7ef879302a015ac70f&v=4'
          alt='Jorge'
        />
      </section>
      <div className='flex flex-row justify-center '>
        <a
          data-aos='fade-down'
          className=' mx-0 mt-10 mb-7 rounded-lg bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 py-3 px-8 text-base font-[500] transition-colors hover:from-indigo-800 hover:to-indigo-800'
          href='https://files.fm/down.php?i=csgjg936p'
          download='Cv_Assaf.pdf'
        >
          Descarga mi CV
        </a>
      </div>
    </div>
  )
}

export default HeroBanner
