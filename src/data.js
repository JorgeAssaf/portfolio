import { AstroIcon, SassIcon, JavascriptIcon, ReactIcon } from './assets'
export const projects = [
  // {
  //   id: 1,
  //   title: 'Gifhy App',
  //   img: 'https://media.istockphoto.com/photos/aerial-view-of-helgtrask-lake-in-sipoonkorpi-national-park-of-finland-picture-id1202128182?k=20&m=1202128182&s=612x612&w=0&h=R8fBO8Y659F8zkCpVRaAWCJQkCKJynK3GpEnmawvAXc=',
  //   description: 'Aplicacion que consume la api de Gifhy',
  //   technologies: ['React', 'Tailwindcss', 'Node js', 'Express'],
  //   repo: '',
  //   demo: ' '
  // },
  {
    id: 1,
    title: 'Potfolio v1',
    img: 'https://i.postimg.cc/SQfsHS7s/demo.png',
    description: 'Aplicacion que consume la api de Gifhy',
    technologies: ['Preact', 'Tailwindcss'],
    repo: 'https://github.com/JorgeAssaf/portfolio',
    demo: 'https://jorgeassaf.netlify.app/'
  }
  // {
  //   id: 3,
  //   title: 'Gifhy App',
  //   img: 'https://media.istockphoto.com/photos/aerial-view-of-helgtrask-lake-in-sipoonkorpi-national-park-of-finland-picture-id1202128182?k=20&m=1202128182&s=612x612&w=0&h=R8fBO8Y659F8zkCpVRaAWCJQkCKJynK3GpEnmawvAXc=',
  //   description: 'Aplicacion que consume la api de Gifhy',
  //   technologies: ['React', 'Sass'],
  //   repo: '',
  //   demo: ' '
  // }
]

export const technologies = [
  {
    id: 1,
    language: 'Javascript',
    image: JavascriptIcon
  },
  {
    id: 2,
    language: 'React',
    image: ReactIcon
  },
  {
    id: 3,
    language: 'Sass',
    image: SassIcon
  },
  {
    id: 4,
    language: 'Vite',
    image: 'https://cdn.worldvectorlogo.com/logos/vitejs.svg'
  },
  {
    id: 5,
    language: 'Tailwindcss',
    image: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg'
  },
  {
    id: 6,
    language: 'Testing',
    image:
      'https://seeklogo.com/images/V/vitest-logo-9ADDA575A5-seeklogo.com.png'
  },
  {
    id: 7,
    language: 'Astro',
    image: AstroIcon
  }
]
