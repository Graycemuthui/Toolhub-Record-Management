import { ColorModeContext, useMode } from "./color";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/dashboard/topbar";
import SideBar from "./components/dashboard/sidebar";
import MainPage from "./components/dashboard/mainpage";
import Form from "./components/pages/form";
import Line from "./components/pages/line";
import Pie from "./components/pages/pie";
import Tools from "./components/pages/records";

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
              <Route path="/tools" element={<Tools />} />
              <Route path="/form" element={<Form />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
