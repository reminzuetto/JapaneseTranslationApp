import React from "react";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a class="nav-link" href="">
              <img
                className="rounded-lg"
                src="/src/assets/MaziiLogo.png"
                alt="Mazii logo"
              />
              <span class="link-text">Mazzi</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="/src/assets/SearchIcon.png" alt="Search" />
              <span class="link-text">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="/src/assets/TranslateIcon.png" alt="Translate" />
              <span class="link-text">Translate</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="/src/assets/CollectionIcon.png" alt="Collection" />
              <span class="link-text">Collection</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="/src/assets/JLPTIcon.png" alt="JLPT" />
              <span class="link-text">JLPT</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <img src="/src/assets/AboutIcon.jpg" alt="About us" />
              <span class="link-text">About us</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
