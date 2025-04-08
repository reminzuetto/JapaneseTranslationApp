function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);

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
          <Header user={user} /> {/* Truyền thông tin người dùng vào Header */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignInForm setUser={setUser} />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/translate" element={<TranslatePage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/jlpt" element={<JLPTPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/collection/:id" element={<CollectionInfoPage />} />
            <Route path="/flashcard/:id" element={<Flashcard />} />
            <Route path="/quizz/:id" element={<Quizz />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
