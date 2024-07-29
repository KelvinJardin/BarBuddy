"use client";

import * as React from 'react';
import Box from '@mui/material/Box';

import { Drawer, AppBar } from "@/components/Layout";

export default function(): React.Element {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar toggleDrawer={toggleDrawer} />
            <Drawer open={open} toggleDrawer={toggleDrawer}/>
        </Box>
    );
}
