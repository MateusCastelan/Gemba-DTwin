import React from "react";
import { ThemeProvider, Dialog, DialogContent, DialogTitle, 
         Icon, Box, Stack, ListItem, ListItemText, 
         MenuItem, Paper, Typography, IconButton } from '@mui/material'
import { Factory, Close } from '@mui/icons-material'
import theme from '../Styles/Theme'
import { categoItens } from './Arrays/CategoArray'


const style = {
    listCat: {
        bgcolor: 'primary.main',
        width: 250,
        maxWidth: '100%',
        
    },
    listImg: {
        bgcolor: 'primary.main',
        maxWidth: '100%',
        marginLeft: 2,
        marginTop: 3
    },
    replace: {
        width: 100,
        height: 100,
        backgroundColor: '#993399',
        marginX: 1
    }
};

export default function Repositorio(props){

    const { title, openRepos, setOpenRepos } = props;
        
    return(
        <ThemeProvider theme={theme}>
           {/* USAR O COMPONENTE DIALOG */}
            <Dialog 
                open={openRepos} 
                maxWidth="lg"
            >
                <DialogTitle>
                    <Typography variant="h6" component='div'>
                        <Icon sx={{marginRight: 1}}>
                            <Factory/>
                        </Icon>
                        {title}
                        <IconButton 
                            onClick={() => {setOpenRepos(false)}}
                            sx={{
                                position: 'absolute', 
                                right: 8,
                                top: 8
                            }}
                        >
                            <Close/>
                        </IconButton>
                    </Typography>
                </DialogTitle>
                <DialogContent dividers>
                    <Stack direction='row'>
                        {Object.keys(categoItens).map((item, i) => (
                        <Box key={i}>
                            <Paper variant="string" sx={style.listCat}>
                            {categoItens[item].map((categoItem) => (
                                    <MenuItem key={categoItem.id}>
                                        <Stack direction='row'>
                                            <ListItemText >
                                                {categoItem.title}
                                            </ListItemText>
                                        </Stack>
                                    </MenuItem>
                                ))}
                            </Paper>
                        </Box>
                        ))}
                        <Box>
                            <Paper variant="string" sx={style.listImg}>
                                <ListItem>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/> 
                                </ListItem>
                                <ListItem>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                    <Box sx={style.replace}/>
                                </ListItem>                      
                            </Paper>
                        </Box>
                    </Stack>
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    )
}



                                 