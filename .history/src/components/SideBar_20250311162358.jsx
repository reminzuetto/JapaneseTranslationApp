import React from "react";

const SideBar = () => {
  return (
    <nav className="w-20 h-screen fixed z-10 bg-blue-600 transition-all duration-200 hover:w-64 group">
      <ul className="flex flex-col items-center space-y-2 mt-4">
        <li className="w-full text-center py-4 bg-blue-700 font-bold uppercase text-white text-lg">
          <a className="flex items-center justify-center space-x-4" href="">
            <img
              className="w-8 h-8 rounded-lg"
              src="/src/assets/MaziiLogo.png"
              alt="Mazii logo"
            />
            <span className="hidden group-hover:block">Mazzi</span>
          </a>
        </li>
        {[
          { src: "/src/assets/SearchIcon.png", text: "Search" },
          { src: "/src/assets/TranslateIcon.png", text: "Translate" },
          { src: "/src/assets/CollectionIcon.png", text: "Collection" },
          { src: "/src/assets/JLPTIcon.png", text: "JLPT" },
          { src: "/src/assets/AboutIcon.jpg", text: "About us" },
        ].map((item, index) => (
          <li key={index} className="w-full">
            <a
              className="flex items-center space-x-4 p-4 text-white hover:bg-blue-700 transition-all duration-300"
              href=""
            >
              <img className="w-8 h-8" src={item.src} alt={item.text} />
              <span className="hidden group-hover:block">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
