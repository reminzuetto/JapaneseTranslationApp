import React from "react";

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

.navbar {
  width: 5rem;
  height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: #595972;
  transition: width 200ms ease;
  /* border: 1px solid #fff; */
}

.navbar-nav {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
}

.nav-item {
  width: 100%;
}

.link-text {
  display: none;
  margin-left: 1rem;
}

.nav-link {
  display: flex;
  align-items: center;
  height: 5rem;
  color: #b6b6b6;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: 500ms;
}

.nav-link:hover {
  filter: grayscale(0%) opacity(1);
  background: #141418;
  color: #ececec;
}

.nav-link img {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
  /* filter: drop-shadow(-3px -5px 0px #AA10D8); */
}

.navbar:hover {
  width: 16rem;
}

.navbar:hover .link-text {
  display: block;
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: #ececec;
  background: #141418;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo img {
  transform: rotate(0deg);
  transition: 600ms;
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: 600ms;
}

.navbar:hover .logo img {
  transform: rotate(-360deg);
}


export default SideBar;
