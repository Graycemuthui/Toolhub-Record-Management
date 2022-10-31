import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../color";
import { records } from "../../data/MockData";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Header from "../Header/Header";

const Records = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "edited",
      headerName: "Edited",
      type: "boolean",
      flex: 1,
      renderCell: ({ row: { edited } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              edited === true
                ? colors.greenAccent[600]
                : edited === false
                ? colors.blueAccent[700]
                : colors.blueAccent[700]
            }
            borderRadius="4px"
          >
            {edited === true && <DoneOutlinedIcon />}
            {edited === false && <CloseOutlinedIcon />}

            <Typography color={colors.grey[200]} sx={{ ml: "5px" }}>
              {edited}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "edits",
      headerName: "Edits",
      type: "number",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="TOTAL" subtitle="Total number of tool records" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[400],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={records} columns={columns} />
      </Box>
    </Box>
  );
};

export default Records;
