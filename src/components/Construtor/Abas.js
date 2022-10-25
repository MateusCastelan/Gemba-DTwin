import React from "react";
import { ThemeProvider, Tabs, Tab, Box } from '@mui/material';
import theme from '../Styles/Theme'


export default function Abas(){

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return(
        <div>
            <ThemeProvider theme={theme}>
                <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'primary' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                        <Tab label="Item Four" />
                        <Tab label="Item Five" />
                        <Tab label="Item Six" />
                        <Tab label="Item Seven" />
                    </Tabs>
                </Box>
            </ThemeProvider>
        </div>
    )

}