import React from 'react';
import { RESUME_PATH } from '../root.link';

const Header = () => {
  return (
    <header class="px-8 lg:px-0 bg-black flex flex-wrap items-center pb-4 shadow-sm">
      <div class="flex-1 flex items-center">
        <a href="#" class="text-xl">
          <h1 className="text-2xl font-bold">Mostafa Halabi</h1>
        </a>
      </div>

      <label for="menu-toggle" class="pointer-cursor md:hidden block">
        <svg
          class="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </label>
      <input class="hidden" type="checkbox" id="menu-toggle" />

      <div class="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul class="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <a
                class="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-gray focus:bg-gray rounded-lg"
                href="#Experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                class="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-gray focus:bg-gray rounded-lg"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                class="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-gray focus:bg-gray rounded-lg"
                href="#Skill"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                class="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-gray focus:bg-gray rounded-lg"
                href="# Contact"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="nofollow noreferrer"
                className="md:p-4 py-3 px-0 block md:mb-0 mb-2 hover:bg-gray focus:bg-gray rounded-lg"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    // <nav className="space-x-10">
    //   <ul className="flex flex-row space-x-4 md:space-x-10 md:text-xl justify-center md:justify-end font-thin">
    //     <li>
    //       <a
    //         href="#Experience"
    //         className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
    //       >
    //         Experience
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#Projects"
    //         className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
    //       >
    //         Projects
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#Skill"
    //         className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
    //       >
    //         Skill
    //       </a>
    //     </li>
    //     <li>
    //       <a
    //         href="#contact"
    //         className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
    //       >
    //         Contact
    //       </a>
    //     </li>

    //     <li>
    //       <a
    //         href={RESUME_PATH}
    //         target="_blank"
    //         rel="noreferrer"
    //         className="py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg"
    //       >
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
};

export default Header;
