import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="heading">TooluHub Records</h1>
      <p className="description">
        TooluHub has records that all records that are edited and also updated.
        The Dashboard contains all the data and also the leaderboard contains
        the users and edited
      </p>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="filled-basic" label="Edit tool" variant="filled" />
        </div>
        <Button variant="contained">SUBMIT</Button>
      </Box>
    </div>
  );
};

export default HomePage;
