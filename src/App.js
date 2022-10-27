import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/dashboard/MainPage";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mainpage" element={<MainPage />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
