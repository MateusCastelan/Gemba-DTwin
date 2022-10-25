import React from "react";
import { ThemeProvider, Dialog, DialogTitle, DialogContent, 
         Typography, IconButton, Paper, ListItem, Box, Stack } from '@mui/material'
import { Close } from '@mui/icons-material'
import theme from '../Styles/Theme'

import { LettTitulo } from '../../SVGs/indexSVG';

const style = {
    lista: {
        bgcolor: '#FFF',
        maxWidth: '100%',
        marginLeft: 2,
        marginTop: 3
    },
    cores: {
        width: 50,
        height: 50,
        marginX: 1
    }
};

export default function MenuPropriedades(props){
    
    const { title, openMenuProp, setOpenMenuProp, parentCallback } = props;
    
        const [color, setColor] = React.useState("#000");
      
        function colorSet(cor) {
            setColor(cor);  
            parentCallback(color);
          }
    
    return(
        <ThemeProvider theme={theme}>
            <Dialog 
                open={openMenuProp} 
                maxWidth="lg"
            >
                <DialogTitle>
                    <Typography variant="h6" component='div'>
                        {title}
                        <IconButton 
                            onClick={() => {setOpenMenuProp(false)}}
                            sx={{ 
                                position: 'absolute', 
                                right: 8, 
                                top: 8,
                            }}
                        >
                            <Close/>
                        </IconButton>
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Stack direction='row'>
                        <Box>
                            <Paper variant="string" sx={style.lista}>
                                <Typography>
                                    Cores
                                        <ListItem>
                                            <Box 
                                                onClick={() => colorSet('#ff0000')}
                                                sx={style.cores} 
                                                backgroundColor='#ff0000'
                                            />
                                            <Box 
                                                onClick={() => colorSet('#0000ff')}                                            
                                                sx={style.cores} 
                                                backgroundColor='#0000ff'
                                            />
                                            <Box 
                                                onClick={() => colorSet('#008000')}
                                                sx={style.cores} 
                                                backgroundColor='#008000'
                                            />
                                            <Box 
                                                onClick={() => colorSet('#ffff00')}
                                                sx={style.cores} 
                                                backgroundColor='#ffff00'
                                            />
                                        </ListItem>
                                </Typography>
                            </Paper>
                        </Box>
                    </Stack>
                    {/* <LettTitulo fill={iscolor}/> */}
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}