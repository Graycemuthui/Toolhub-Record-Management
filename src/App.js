import { ColorModeContext, useMode } from "./color";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/dashboard/TopBar";
import SideBar from "./components/dashboard/SideBar";
import MainPage from "./components/dashboard/MainPage";
import Pie from "./components/dashboard/Pie";
import Records from "./components/dashboard/Records";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/tools" element={<Records />} />
              <Route path="/pie" element={<Pie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
