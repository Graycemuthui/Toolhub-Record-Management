import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import Drawer from "@mui/material/Drawer";

const Navbar = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon sx={{ transform: "scale(1)" }} />
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <Drawer />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" to="/" component={Link} />
                <Tab label="Dashboard" to="/mainpage" component={Link} />
                <Tab label="Leaderboard" />
              </Tabs>
              <Button sx={{ marginLeft: "auto" }} variant="contained">
                Login
              </Button>
              <Button sx={{ marginLeft: "10px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
