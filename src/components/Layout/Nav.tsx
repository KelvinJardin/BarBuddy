"use client";

import * as React from 'react';
import Box from '@mui/material/Box';

import { Drawer, AppBar } from "@/components/Layout";
import InboxIcon from "@mui/icons-material/MoveToInbox";

// TODO: set the correct icons
const linkGroups = [
    [
        {
            href: "/drinks",
            text: "Drinks",
            Icon: InboxIcon
        },
        {
            href: "/ingredients",
            text: "Ingredients",
            Icon: InboxIcon
        },
    ],
    [
        {
            href: "/settings",
            text: "Settings",
            Icon: InboxIcon
        },
        {
            href: "/about",
            text: "About Application",
            Icon: InboxIcon
        },
        {
            href: "/facebook",
            text: "Share on Facebook",
            Icon: InboxIcon
        },
        {
            href: "/pro",
            text: "Upgrade to Pro (no ads)!",
            Icon: InboxIcon
        }
    ]
];

export default function(): React.Element {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar toggleDrawer={toggleDrawer} />
            <Drawer linkGroups={linkGroups} open={open} toggleDrawer={toggleDrawer}/>
        </Box>
    );
}
