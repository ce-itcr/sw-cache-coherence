import { Typography, Stack } from "@mui/material";
import React from "react";

const Dashboard = () => {

  return (
    <>
      <div>
        <Stack
          spacing={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4">
            Dashboard
          </Typography>
        </Stack>
      </div>
    </>
  )

};

export default Dashboard;
