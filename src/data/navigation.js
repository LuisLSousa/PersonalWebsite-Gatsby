
import React from 'react';
import { AiFillHome, AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiCodeAlt } from 'react-icons/bi';
import { HiOutlineAcademicCap, HiAcademicCap } from 'react-icons/hi';
import { HiEnvelope, HiOutlineEnvelope } from 'react-icons/hi2';
import { FaBook, FaCode, FaUser } from 'react-icons/fa';
import { MdWork, MdWorkOutline } from 'react-icons/md';

export const navList = [
    {
        sectionId: 'home',
        icon: <AiOutlineHome />,
        activeIcon: <AiFillHome />,
        name: 'Home',
    },
    {
        sectionId: 'about',
        icon: <AiOutlineUser />,
        activeIcon: <FaUser />,
        name: 'About Me',
    },
    {
        sectionId: 'experience',
        icon: <MdWorkOutline />,
        activeIcon: <MdWork />,
        name: 'Experience',
    },
    {
        sectionId: 'education',
        icon: <HiOutlineAcademicCap />,
        activeIcon: <HiAcademicCap />,
        name: 'Education',
    },
    // {
    //     sectionId: 'projects',
    //     icon: <BiBook />,
    //     activeIcon: <FaBook />,
    //     name: 'Projects',
    // },
    {
        sectionId: 'skills',
        icon: <BiCodeAlt />,
        activeIcon: <FaCode />,
        name: 'Skills',
    },
    {
        sectionId: 'contact',
        icon: <HiOutlineEnvelope />,
        activeIcon: <HiEnvelope />,
        name: 'Contact',
    },
];
