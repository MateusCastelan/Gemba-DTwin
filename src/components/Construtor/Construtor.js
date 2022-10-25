import React from 'react';
import NavBars from './NavBars'
import AcessoRapido from './AcessoRap'
import Abas from './Abas'
import Grid from "../Grid";
import Grid2 from "../Grid2";
import GridImage from "../GridImage";
import GridTransformer from "../GridTransformer";
import GridTransformer3 from "../GridTransformer3";
import MenuPropriedades from './MenuPropriedades';
import { LettTitulo } from '../../SVGs/indexSVG';
import { Container } from '@mui/material';

function Construtor() {

    const [openMenuProp, setOpenMenuProp] = React.useState(false)

        const [color, setColor] = React.useState("");  
      
        function func(color) {
          setColor(color);
        }

    return (
        <>
            <NavBars/>  
            <AcessoRapido/> 
            <MenuPropriedades
                parentCallback={func}
                title = 'Menu de Propriedades'
                openMenuProp = {openMenuProp}
                setOpenMenuProp = {setOpenMenuProp}
            />  
            {/* <Grid2  />       */}
            <Container sx={{width: '50%', marginTop: 10}}>
                <LettTitulo 
                    onClick={() => {setOpenMenuProp(true)}} 
                    fill={color} 
                />   
            </Container>
        </>
    )
      
}

export default Construtor;
    
    
