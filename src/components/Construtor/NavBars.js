import React from "react";
import { ThemeProvider, Typography, AppBar, Icon, MenuItem, Menu, Button, 
        Toolbar, Stack, Paper, ListItemText, 
        ListItemIcon,  } from '@mui/material/'
import theme from '../Styles/Theme'
import Logo from '../../SVGs/Logo'
import { menuItems } from './Arrays/MenusArray'



export default function NavBars(){

    /* Função para o DropDown do Menu*/
    const [anchorEl, setAnchorEl] = React.useState(false);

    const handleClick = (menuTitulo, event) => {
        setAnchorEl({ [menuTitulo]: event.currentTarget });
    };

    const handleClose = () => {
        setAnchorEl(false);
    };
    
    return(
        <div>
            <ThemeProvider theme={theme}>
                <AppBar position="static" sx={{ width: 2/2, paddingY: '0.08rem' }}>
                    <Toolbar variant="dense" disableGutters={true}>
                        <Icon 
                            edge="start" 
                            aria-label="logo" 
                            fontSize="large"
                            sx={{ display: 'flex', marginLeft: '0.4rem' }}
                        >
                            <Logo/>
                        </Icon>
                        <Stack direction='row'>
                            {Object.keys(menuItems).map((item, index) => (
                            <div key={index}>
                                <Button 
                                    variant="text"
                                    onClick={(e) => handleClick(index, e)}
                                >
                                    {item} 
                                </Button>
                                    <Menu
                                        anchorEl={anchorEl && anchorEl[index]}
                                        keepMounted
                                        open={anchorEl && Boolean(anchorEl[index])}
                                        onClose={handleClose}
                                        // getcontentanchorel={null}
                                    >
                                        {menuItems[item].map((menuItems) => (
                                            <Paper 
                                                key={menuItems.id} 
                                                variant="string" 
                                                sx={{ width: 260, maxWidth: '100%' }}
                                            >
                                                    <MenuItem
                                                        selected={menuItems === item}                           
                                                        onClick={handleClose}
                                                    >
                                                            <ListItemIcon key={item.icon}>
                                                                {menuItems.icon}
                                                            </ListItemIcon>
                                                            <ListItemText key={item.text}>
                                                                {menuItems.title}
                                                            </ListItemText>
                                                            <Typography key={item.cod} variant="body2" color="text.secondary">
                                                                {menuItems.cod}
                                                            </Typography>
                                                    </MenuItem>
                                             </Paper>
                                        ))}
                                    </Menu>
                                </div>
                            ))}
                        </Stack>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </div>
    );
}