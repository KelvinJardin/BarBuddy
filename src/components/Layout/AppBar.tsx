"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

type AppBarProps = {
    toggleDrawer: (open: boolean) => void;
};

export default function ({toggleDrawer}: AppBarProps): React.Element {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <MenuIcon onClick={toggleDrawer(true)}/>
                    </IconButton>
                    <Button>Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
