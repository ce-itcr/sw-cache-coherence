import { Typography, Stack } from "@mui/material";
import React from "react";
import Header from "src/components/Header/Header";

const Dashboard = ({currentProtocol}) => {

    return (
        <>
            <Header title='/app/dashboard' />

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
