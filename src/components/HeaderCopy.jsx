import React, { useContext } from 'react';
import { IoMoon } from 'react-icons/io5';
import { IoMdSunny } from 'react-icons/io';
import ThemeContext from '../context/ThemeProvider';
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineLinkedin,
} from "react-icons/ai";

//


export function HeaderCopy({ sidebarOpen, setSidebarOpen,}) {
  
  const { colorTheme, setTheme } = useContext(ThemeContext);

 // comentario 3
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30 fade-in-fwd dark:bg-stone-900 dark:border-slate-800">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px ">
          {/* Header: Left side */}
          <p className='text-black dark:text-white'>Allegrini Eduardo</p>
          <div className="flex ">
            {/* Hamburger button */}
            {/* Hamburger button */}
            <button
              className="text-slate-500 hover:text-slate-600 lg:hidden"
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              
              {<svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <rect x="4" y="5" width="16" height="2" />
                <rect x="4" y="11" width="16" height="2" />
                <rect x="4" y="17" width="16" height="2" />
              </svg>}

            </button>
          </div>

          

          {/* Header: Right side */}
          <div className="flex items-center">
            <button
              className="w-8 h-8 flex items-center justify-center bg-stone-700 hover:bg-slate-200 dark:bg-neutral-100 dark:hover:bg-slate-600 transition duration-150 rounded-full ml-3"
              onClick={() => setTheme(colorTheme)}
            >
              {colorTheme === 'light' ? (
                <IoMdSunny className="text-neutral-800" />
              ) : (
                <IoMoon />
              )}
            </button>

            <div className="w-px h-6 bg-gray-600 mx-3 text-black dark:text-white"></div>
              {/* Toggle Right side  */}

              <div className="flex py-5 text-black dark:text-white">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/edu.all/"
                className="pr-4 inline-block text-accent hover:text-neutral-600"
              >
                {" "}
                <AiOutlineInstagram size={40} />{" "}
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=%2B542236033394&text&type=phone_number&app_absent=0"
                className="pr-4 inline-block text-accent hover:text-neutral-600"
              >
                {" "}
                <AiOutlineWhatsApp size={40} />{" "}
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/eduardoallegrini/"
                className="pr-4 inline-block text-accent hover:text-neutral-600"
              >
                {" "}
                <AiOutlineLinkedin size={40} />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// 24-7-2024 actualizado