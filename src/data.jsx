import { FaLocationDot } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { HiOutlineDevicePhoneMobile, HiOutlineUser } from 'react-icons/hi2';

export const nav_links = [
  {
    id: 1,
    label: 'home',
    url: '/home',
  },
  {
    id: 2,
    label: 'about',
    url: '/about',
  },
  {
    id: 3,
    label: 'projects',
    url: '/projects',
  },
  {
    id: 4,
    label: 'gallery',
    url: '/gallery',
  },
  {
    id: 5,
    label: 'blog',
    url: '/blog',
  },
  {
    id: 6,
    label: 'clients',
    url: '/clients',
  },
  {
    id: 7,
    label: 'pricing',
    url: '/pricing',
  },
  {
    id: 8,
    label: 'contact',
    url: '/contact',
  },
];

export const skills = [
  {
    id: 1,
    language: 'HTML',
    percentage: 100,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
  {
    id: 2,
    language: 'CSS',
    percentage: 95,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
  {
    id: 3,
    language: 'Javascript',
    percentage: 85,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
  {
    id: 4,
    language: 'ReactJS',
    percentage: 75,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
  {
    id: 5,
    language: 'NodeJS',
    percentage: 70,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
  {
    id: 6,
    language: 'NextJS',
    percentage: 90,
    content:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro corporis commodi eos deleniti officiis cum rerum laborum odio! Minus, suscipit.',
  },
];

export const projects = [
  {
    id: 1,
    project_screenshot_img: './images/project1.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Contact form',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
  {
    id: 2,
    project_screenshot_img: '/images/project2.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Calculator',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
  {
    id: 3,
    project_screenshot_img: '/images/project3.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Contact form',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
  {
    id: 4,
    project_screenshot_img: '/images/project4.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Website',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
  {
    id: 5,
    project_screenshot_img: '/images/project5.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Menu',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
  {
    id: 6,
    project_screenshot_img: '/images/project6.png',
    tech_stack: 'HTML, CSS, JAVASCRIPT',
    project_name: 'Profile Card',
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur numquam iusto nemo hic! Optio pariatur explicabo animi a officiis facere?',
  },
];

export const mans_info = [
  {
    id: 1,
    icon: <FaLocationDot />,
    label: 'Address',
    info: 'Nairobi, Kenya',
  },
  {
    id: 2,
    icon: <HiOutlineUser />,
    label: 'Freelance',
    info: 'available right now',
  },
  {
    id: 1,
    icon: <HiOutlineMail />,
    label: 'Email',
    info: 'somename@protonmail.co',
  },
  {
    id: 1,
    icon: <HiOutlineDevicePhoneMobile />,
    label: 'Phone',
    info: '+254 113 427 160',
  },
];
