import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { GithubSignIn, SignOut } from "@/components/Auth";
import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";

type AppBarProps = {
    toggleDrawer: (open: boolean) => void;
};

export default function ({toggleDrawer}: AppBarProps): React.Element {
    const {data: session} = useSession();

    const loginOutButton= session ? <SignOut/> : <GithubSignIn/>;

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
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Bar Buddy
                    </Typography>
                    {loginOutButton}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
