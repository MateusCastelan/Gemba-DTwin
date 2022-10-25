import React from "react";
import { Icon } from "@mui/material";
import { GridOn , GridOff } from '@mui/icons-material'

export default function GridButton() {  
    const [currentButton, setCurrentButton] = React.useState(false);
    const handleButtonChange = () => {
        if(currentButton === false){ 
            setCurrentButton(true)
        }else{
            setCurrentButton(false)
        }
    }

    return (
        <>         
            <Icon onClick={handleButtonChange}>
                {currentButton ? <GridOn/> : <GridOff/> }
            </Icon>   
        </>
    );
} 