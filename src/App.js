import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/dashboard/mainPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import Navbar from "./components/Navigation/Navbar,jsx";
import Leaderboard from "./components/LeaderBoard/Leaderboard.jsx";

function App() {
  return (
    <div className="app">
      <main className="content">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
