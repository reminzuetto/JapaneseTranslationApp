import React, { useState, useEffect } from "react";
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
import Flashcard from "./pages/FlashCard";
import Quizz from "./pages/Quizz";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ProfilePage from "./pages/UserProfilePage";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Nội dung chính */}
        <div
          className={`flex-1 transition-all duration-300 ${
            isSidebarOpen ? "ml-64" : "ml-20"
          }`}
        >
          <Header user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />{" "}
            <Route path="/signin" element={<SignInForm setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/translate" element={<TranslatePage />} />
            <Route
              path="/collection"
              element={<CollectionPage user={user} />}
            />
            <Route path="/jlpt" element={<JLPTPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collection/:id" element={<CollectionInfoPage />} />
            <Route path="/flashcard/:id" element={<Flashcard />} />
            <Route path="/quizz/:id" element={<Quizz />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route
              path="/profile"
              element={<ProfilePage user={user} setUser={setUser} />}
            />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
