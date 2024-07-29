import * as React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

export default function ({linkGroups, toggleDrawer, open}): React.Element {
    const formatLink = ({text, href, Icon}, key) => (
        <ListItem key={key} disablePadding>
            <ListItemButton component={Link} href={href}>
                <ListItemIcon><Icon/></ListItemIcon>
                <ListItemText primary={text}/>
            </ListItemButton>
        </ListItem>
    );

    const linksList = linkGroups.reduce((acc, group, index) => {
        if (index > 0) {
            acc.push(<Divider key={`divider-${index}`} />);
        }

        acc.push(
            <List key={`list-${index}`}>
                {group.map((link, linkIndex) => formatLink(link, `${index}-${linkIndex}`))}
            </List>
        );

        return acc;
    }, []);

    return (
        <Drawer open={open} onClose={toggleDrawer(false)}>
            <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)}>
                {linksList}
            </Box>
        </Drawer>
    );
}
