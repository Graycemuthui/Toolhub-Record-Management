import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/dashboard/mainPage";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import Leaderboard from "./components/LeaderBoard/Leaderboard";

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
