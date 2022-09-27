import { projects } from '../data'
import { FaGithub } from 'react-icons/fa'
const Projects = () => {
  return (
    <main>
      <h2 className='text-4xl my-7 flex justify-center text-indigo-700 font-medium dark:text-indigo-500 '>Proyectos</h2>
      <div className='md:grid grid-cols-2 md: gap-10 md:w-9/12 mx-auto  sm:flex sm:flex-col '>
        {projects.map(({ id, title, description, technologies, img }) => {
          return (
            <section
              className=' dark:bg-slate-800 bg-slate-900 pb-5  rounded-md '
              key={id}
            >
              <img
                className='object-cover w-full mx-auto mb-3 rounded-t-md'
                src={img}
                alt={title}
              />
              <h3 className='text-center mb-4 text-2xl text-indigo-500 font-medium '>
                {title}
              </h3>
              <p className='mx-4 mb-4 text-base text-gray-200'>
                {description}
              </p>

              {/* <p>{technologies.join(" ")}</p> */}

              {technologies.map(technologie => {
                return (
                  <span className='mx-4 text-gray-200 mr-2 text-base bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 py-1 rounded-sm px-2'>
                    {technologie}
                  </span>
                )
              })}
            </section>
          )
        })}
      </div>

      <a
        href='https://github.com/JorgeAssaf?tab=repositories'
        target='_blank'
        className=' bg-indigo-500 my-7 p-4 md:text-base sm:text-sm flex md:flex-row mx-auto sm:flex-col md:w-96 h-auto rounded-md text-center md:justify-center'
      >
        Mas proyectos en mi github!!
        <h4>
          {' '}
          <FaGithub className='md:ml-4 md:mt-0 sm:mx-auto sm:mt-2 ' size={22} />
        </h4>
      </a>
    </main>
  )
}

export default Projects
