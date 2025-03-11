import React from "react";

const SideBar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 hover:w-64 bg-blue-600 transition-all duration-200 flex flex-col items-center p-2">
      <ul className="w-full">
        <li className="mb-4 w-full text-center text-white font-bold text-xl bg-blue-500 p-3 uppercase">
          <a href="" className="flex items-center space-x-4">
            <img
              className="w-8 h-8 rounded-lg"
              src="/src/assets/MaziiLogo.png"
              alt="Mazii logo"
            />
            <span className="hidden group-hover:inline">Mazii</span>
          </a>
        </li>
        {[
          { src: "/src/assets/SearchIcon.png", label: "Search" },
          { src: "/src/assets/TranslateIcon.png", label: "Translate" },
          { src: "/src/assets/CollectionIcon.png", label: "Collection" },
          { src: "/src/assets/JLPTIcon.png", label: "JLPT" },
          { src: "/src/assets/AboutIcon.jpg", label: "About us" },
        ].map((item, index) => (
          <li key={index} className="w-full">
            <a
              href=""
              className="flex items-center p-3 text-white transition-all hover:bg-blue-500 space-x-4"
            >
              <img className="w-8 h-8" src={item.src} alt={item.label} />
              <span className="hidden group-hover:inline">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
