import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import HireMe from '../components/HireMe'

const HomePage = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`w-screen sm:px-30 px-10 py-10 sm:pt-10 ${theme === "dark" ? "bg-gray-900" : "bg-gray-50"} transition-all duration-300 ease-in`}>
            <div className='flex flex-col lg:flex-row justify-between gap-10 items-center'>
                <div className='flex flex-col items-center lg:items-start lg:w-150'>
                    <img src="/profile.jpg" alt="Portrait of Harjot Singh" className='sm:h-40 sm:w-40 md:h-50 md:w-50 h-30 w-30 object-cover object-[10%_20%] rounded-full' />
                    <div className='flex flex-col gap-1 lg:items-start items-center mt-4'>
                        <p className={`font-extralight text-4xl ${theme === "dark" ? "text-white" : "text-black "}`}>About Me</p>
                        <span className={`${theme === "dark" ? "text-white" : "text-black"} text-sm text-center sm:text-left sm:text-lg italic`}>B.Tech - Information Technology</span>
                    </div>
                    <p className={`${theme === "dark" ? "text-white" : "text-black"} text-center lg:text-left mt-4`}>
                   Harjot Singh is a versatile developer specializing in both Android development and the MERN stack, focused on creating robust, user-friendly, and scalable applications. With a keen eye for detail and a commitment to effective communication, he delivers seamless solutions from intuitive front-end interfaces to efficient back-end architecture, ensuring high performance across web and mobile platforms.                    </p>
                    <div className={`flex text-2xl gap-2 mt-4 ${theme === "dark" ? "text-white" : "text-black"}`}>
                        <a href="https://github.com/HARJOT9779" target='_blank' rel="noopener noreferrer" aria-label="GitHub Profile"><i className="ri-github-fill"></i></a>
                        <a href="https://www.linkedin.com/in/harjot-singh-%E2%98%AC-a1b499339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target='_blank' rel="noopener noreferrer" aria-label="LinkedIn Profile"><i className="ri-linkedin-box-fill"></i></a>
                        <a href="" rel="noopener noreferrer" aria-label="Twitter X Profile"><i className="ri-twitter-x-fill"></i></a>
                        <a href="" rel="noopener noreferrer" aria-label="Threads Profile"><i className="ri-threads-fill"></i></a>
                    </div>
                </div>
                <div className='md:w-100 sm:w-100 w-full'>
                    <HireMe theme={theme} />
                </div>

            </div>

        </div>
    );
};

export default HomePage;