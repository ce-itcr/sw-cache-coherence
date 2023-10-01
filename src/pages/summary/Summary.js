import { Typography, Stack } from "@mui/material";
import React from "react";

const Summary = () => {

  return (
    <>
      <div>
        <Stack
          spacing={1}
          sx={{ mb: 3 }}
        >
          <Typography variant="h4">
            Summary
          </Typography>
        </Stack>
      </div>
    </>
  )

};

export default Summary;
