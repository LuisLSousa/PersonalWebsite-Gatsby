
import React from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
// import { BiBook } from 'react-icons/bi';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { MdWorkOutline } from 'react-icons/md';

export const navList = [
    {
        sectionId: 'home',
        icon: <AiOutlineHome />,
        name: 'Home',
    },
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
    // {
    //     sectionId: 'projects',
    //     icon: <BiBook />,
    //     name: 'Projects',
    // },
    {
        sectionId: 'skills',
        icon: <BiCodeAlt />,
        name: 'Skills',
    },
    {
        sectionId: 'contact',
        icon: <HiOutlineEnvelope />,
        name: 'Contact',
    },
];
