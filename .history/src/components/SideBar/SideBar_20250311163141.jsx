import React from "react";
import "./Sidebar.css";

const SidebarItem = ({ src, text }) => (
  <li className="nav-item">
    <a className="nav-link" href="">
      <img src={src} alt={text} />
      <span className="link-text">{text}</span>
    </a>
  </li>
);

const SideBar = () => {
  const menuItems = [
    { src: "/src/assets/SearchIcon.png", text: "Search" },
    { src: "/src/assets/TranslateIcon.png", text: "Translate" },
    { src: "/src/assets/CollectionIcon.png", text: "Collection" },
    { src: "/src/assets/JLPTIcon.png", text: "JLPT" },
    { src: "/src/assets/AboutIcon.jpg", text: "About us" },
  ];

  return (
    <div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="logo">
            <a className="nav-link" href="">
              <img
                className="rounded-lg"
                src="/src/assets/MaziiLogo.png"
                alt="Mazii logo"
              />
              <span className="link-text">Mazzi</span>
            </a>
          </li>
          {menuItems.map((item, index) => (
            <SidebarItem key={index} src={item.src} text={item.text} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
