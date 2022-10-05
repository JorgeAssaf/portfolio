import { projects } from '../data'
import { FaGithub, FaInternetExplorer } from 'react-icons/fa'
const Projects = () => {
  return (
    <main>
      <h2 id='proyectos' className='my-7 flex justify-center text-4xl font-medium text-indigo-700 dark:text-indigo-500  '>
        Proyectos
      </h2>
      <div className='grid-cols-2 gap-5 sm:mx-auto sm:flex sm:w-9/12 sm:flex-col md:mx-auto md:grid md:w-11/12 lg:w-9/12'>
        {projects.map(
          ({ id, title, description, technologies, img, repo, demo }) => {
            return (
              <section
                className='overflow-hidden rounded-lg  bg-slate-800 pb-5  transition-all hover:scale-105 dark:bg-slate-800'
                key={id}
              >
                <img
                  className='mx-auto mb-3 h-60 w-full rounded-t-md  object-cover  object-center'
                  src={img}
                  alt={title}
                />

                <div className='px-6 '>
                  <h3 className='mb-2 text-lg font-medium  text-indigo-400 '>
                    {title}
                  </h3>
                  <p className=' mb-5 leading-relaxed  text-gray-200 sm:text-sm md:text-base'>
                    {description}
                  </p>
                  <div className='flex flex-row flex-wrap justify-center gap-3 text-center   '>
                    {technologies.map((technology, i) => {
                      return (
                        <span
                          key={i}
                          className=' rounded-md bg-gradient-to-r from-indigo-500  via-indigo-600 to-indigo-700 px-4 py-2 text-base text-gray-200 sm:text-sm md:text-base '
                        >
                          {technology}
                        </span>
                      )
                    })}
                  </div>
                  <div className=' mt-5 flex h-auto items-center justify-between sm:flex-wrap md:flex-nowrap'>
                    <a
                      href={repo}
                      target='_blank'
                      className='  flex items-center rounded-md px-4 py-3 text-sm font-medium uppercase'
                      rel='noreferrer'
                    >
                      <FaGithub className='mr-2' size={20} />
                      Repository
                    </a>
                    <a
                      href={demo}
                      target='_blank'
                      className=' flex items-center rounded-md px-4 py-3 text-sm font-medium uppercase'
                      rel='noreferrer'
                    >
                      <FaInternetExplorer className='mr-2' size={20} />
                      Website
                    </a>
                  </div>
                </div>

                {/* <p>{technologies.join(" ")}</p> */}
              </section>
            )
          }
        )}
      </div>

      <a
        href='https://github.com/JorgeAssaf?tab=repositories'
        target='_blank'
        className=' my-7 mx-auto flex h-auto rounded-md bg-indigo-500 p-4 text-center transition-colors hover:bg-indigo-700 sm:flex-col sm:text-base md:w-96 md:flex-row md:justify-center md:text-lg'
        rel='noreferrer'
      >
        Mas proyectos en mi github!!
        <h4>
          {' '}
          <FaGithub className=' sm:mx-auto sm:mt-2 md:mt-0 md:ml-4' size={22} />
        </h4>
      </a>
    </main>
  )
}

export default Projects
