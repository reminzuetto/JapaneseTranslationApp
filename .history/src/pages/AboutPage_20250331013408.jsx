import React from "react";

const AboutPage = () => (
  <div className="min-h-screen bg-gray-100 p-8">
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
        About Us
      </h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Who We Are</h2>
        <p className="text-gray-600 mt-2">
          Welcome to our project! This is a PBL5 project, a Japanese learning
          app integrated with translation features. Our goal is to provide an
          interactive and efficient way for learners to improve their Japanese
          skills.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          Meet the Developer
        </h2>
        <div className="mt-4 flex items-center space-x-4">
          <div className="w-16 h-16 rounded-full">
            <img
              src="/src/assets/Yuuto-sama.png"
              alt="Developer Avatar"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Yuuto-sama</h3>
            <p className="text-gray-600">
              Frontend Developer | React.js Enthusiast
            </p>
          </div>
        </div>
        <p className="text-gray-600 mt-2">
          I specialize in React.js and modern frontend technologies, ensuring a
          seamless user experience in our app.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Our Vision</h2>
        <p className="text-gray-600 mt-2">
          We aim to create an intuitive and feature-rich platform for Japanese
          learners, making language acquisition more accessible and engaging.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
        <p className="text-gray-600 mt-2">
          Have any questions? Feel free to reach out!
        </p>
        <div className="mt-4">
          <a
            href="https://www.instagram.com/duyetleminh2004/"
            className="text-blue-500 hover:underline"
          >
            contact@japanesestudyapp.com
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default AboutPage;
