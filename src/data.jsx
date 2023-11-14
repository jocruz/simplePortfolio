import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact , FaNode, FaEthereum, FaDiceThree,} from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-orange-300' />,
    text: 'Proficient in HTML & CSS, creating responsive and aesthetically pleasing web layouts.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-orange-300' />,
    text: 'Comfortable with JavaScript, developing interactive web applications and striving to enhance user experience.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-orange-300' />,
    text: 'Intermediate knowledge in React, working with components and state to build dynamic user interfaces.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNode className='h-16 w-16 text-orange-300' />,
    text: 'Practical experience with Node.js in various projects, continuously enhancing my skills and knowledge through hands-on application.',
  },
  {
    id:nanoid(),
    title: 'Ethereum',
    icon: <FaEthereum className='h-16 w-16 text-orange-300' />,
    text: 'Practical experience with projects that deal with ETH based currency projects. ',
  },
  {
    id:nanoid(),
    title: 'Web 3',
    icon: <FaDiceThree className='h-16 w-16 text-orange-300' />,
    text: 'Research in Web Three technologies, practices, and latest news',
  },
];


export const localProjects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
