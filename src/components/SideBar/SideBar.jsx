import React from "react";
import { NavLink } from "react-router-dom";

const SidebarItem = ({ src, text, to }) => (
  <li className="w-full">
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center h-20 text-gray-200 no-underline transition duration-500 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:font-bold hover:rounded-lg hover:ml-3 hover:mr-3 ${
          isActive ? "bg-blue-700 font-bold text-white" : ""
        }`
      }
    >
      <img className="w-8 min-w-8 mx-6" src={src} alt={text} />
      <span className="hidden group-hover:block ml-4">{text}</span>
    </NavLink>
  </li>
);

const SideBar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { src: "/src/assets/SearchIcon.png", text: "Search", to: "/search" },
    {
      src: "/src/assets/TranslateIcon.png",
      text: "Translate",
      to: "/translate",
    },
    {
      src: "/src/assets/CollectionIcon.png",
      text: "Collection",
      to: "/collection",
    },
    { src: "/src/assets/JLPTIcon.png", text: "JLPT", to: "/jlpt" },
    { src: "/src/assets/AboutIcon.jpg", text: "About us", to: "/about" },
  ];

  return (
    <nav
      className={`w-20 h-screen fixed z-51 bg-blue-600 transition-all duration-200 hover:w-64 group ${
        isOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <ul className="flex flex-col items-center space-y-2">
        <li className="w-full text-center py-4 bg-blue-700 font-bold uppercase text-white text-2xl">
          <NavLink className="flex items-center justify-center" to="/">
            <img
              className="w-8 h-8 rounded-lg transition-transform duration-600 group-hover:rotate-[-360deg]"
              src="/src/assets/MaziiLogo.png"
              alt="Mazii logo"
            />
            <span className="hidden group-hover:block ml-4">Mazzi</span>
          </NavLink>
        </li>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            src={item.src}
            text={item.text}
            to={item.to}
          />
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
