import React from "react";
import "./index.css";

const SideBar = () => {
  return (
    <div>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a class="nav-link" href="">
              <img src="/FrontEnd/Resources/Resource/spotify.svg" />
              <span class="link-text">Spotify</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/FrontEnd/HTML/index.html">
              <img src="/FrontEnd/Resources/icons/home.svg" alt="Home" />
              <span class="link-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/FrontEnd/HTML/About.html">
              <img src="/FrontEnd/Resources/icons/about.svg" alt="About us" />
              <span class="link-text">About us</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/FrontEnd/HTML/Library.html">
              <img src="/FrontEnd/Resources/icons/library.svg" alt="Library" />
              <span class="link-text">Library</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/FrontEnd/HTML/RateAndReview.html">
              <img
                src="/FrontEnd/Resources/icons/like.svg"
                alt="Rating & Review"
              />
              <span class="link-text">Rating & Review</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/FrontEnd/HTML/Request.html">
              <img
                src="/FrontEnd/Resources/icons/icons-solid.svg"
                alt="Request Songs"
              />
              <span class="link-text">Request Songs</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
