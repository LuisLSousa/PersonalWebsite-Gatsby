
import React from 'react';
import { AiOutlineHome, AiOutlineMessage, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
// export {default as PT_LOGO} from '../../assets/img/pt-logo.png';

export const navList = [
    // {
    //     sectionId: 'home',
    //     icon: <AiOutlineHome />,
    //     name: 'Home',
    // },
    {
        sectionId: 'about',
        icon: <AiOutlineUser />,
        name: 'About Me',
    },
    {
        sectionId: 'experience',
        icon: <MdWorkOutline />,
        name: 'Experience',
    },
    {
        sectionId: 'education',
        icon: <HiOutlineAcademicCap />,
        name: 'Education',
    },
    {
        sectionId: 'projects',
        icon: <BiBook />,
        name: 'Projects',
    },
    {
        sectionId: 'skills',
        icon: <BiCodeAlt />,
        name: 'Skills',
    },
    {
        sectionId: 'contact',
        icon: <AiOutlineMessage />,
        name: 'Contact',
    },
];
