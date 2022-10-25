import React, { useState } from "react";
import { Box, Stack, IconButton, Divider } from '@mui/material'
import { Factory} from '@mui/icons-material'
import Grid from './Botões/Grid'
import Repositorio from './Repositorio'
import { acessoMenu } from './Arrays/AcessoArray'

export default function AcessoRapido(){
    
    const lista1 = acessoMenu.parte1.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )

    const lista2 = acessoMenu.parte2.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )

    const lista3 = acessoMenu.parte3.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )

    const lista4 = acessoMenu.parte4.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )
    
    const lista5 = acessoMenu.parte5.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )

    const lista6 = acessoMenu.parte6.map((icon) => 
        <IconButton key={icon.id}>
            {icon.value}
        </IconButton>
    )

    const [openRepos, setOpenRepos] = useState(false)
                
    return(
       <div>
            <Box sx={{ width: 2/2, backgroundColor: '#f1f1f1', zIndex: '-1'}}>
                <Stack direction='row'>
                    {lista1}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    {lista2}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    {lista3}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    {lista4}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    {lista5}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    {lista6}
                    <Divider orientation="vertical" variant="middle" flexItem/>
                    <IconButton>
                        <Grid/>
                    </IconButton>     
                    <IconButton onClick={() => {setOpenRepos(true)}}>
                        <Factory/>
                    </IconButton>  
                </Stack>
            </Box>
            <Repositorio 
                title = 'Repositório de Imagens'
                openRepos = {openRepos}
                setOpenRepos = {setOpenRepos}
            />   
            
        </div>
    )
}