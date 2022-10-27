import { ColorModeContext, useMode } from "../../color";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "../dashboard/TopBar";
import SideBar from "../dashboard/SideBar";
import Records from "./records/Records";
import MissingRecords from "./records/MissingRecords";
import EditedRecords from "./records/EditedRecords";
import Pie from "./records/Pie";
import "../../index.css";

const MainPage = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
          <main className="content">
            <TopBar />
            <Records />
            <MissingRecords />
            <EditedRecords />
            <Pie />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default MainPage;
