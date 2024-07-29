import * as React from "react";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const links = [
    {
        href: "/",
        text: "Home",
        Icon: InboxIcon
    },
    {
        href: "/cocktails",
        text: "Cocktails",
        Icon: InboxIcon
    },
    {
        href: "/ingredients",
        text: "Ingredients",
        Icon: InboxIcon
    },
];

const appLinks = [
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
];

export default function ({toggleDrawer, open}): React.Element {
    const formatLink = ({text, href, Icon}, key) => (
        <ListItem key={key} disablePadding>
            <ListItemButton component={Link} href={href}>
                <ListItemIcon><Icon/></ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </ListItem>
    );

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
                <List>
                    {links.map(formatLink)}
                </List>
                <Divider/>
                <List>
                    {appLinks.map(formatLink)}
                </List>
            </Box>
        </Drawer>
    );
}
