import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Sidebar from "./components/SideBar/SideBar";
import SignInForm from "./pages/SignInForm";
import SignUpForm from "./pages/SignUpForm";
import SearchPage from "./pages/SearchPage";
import TranslatePage from "./pages/TranslatePage";
import CollectionPage from "./pages/CollectionPage";
import JLPTPage from "./pages/JLPTPage";
import AboutPage from "./pages/AboutPage";
import CollectionInfoPage from "./pages/CollectionInfoPage";
import "./App.css"; // Import CSS file for styling

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* <RightSideBar> </RightSideBar> */}

        {/* Nội dung chính */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInForm />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/translate" element={<TranslatePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/jlpt" element={<JLPTPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collection/:id" element={<CollectionInfoPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
