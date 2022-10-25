import React from "react";
import { Icon } from "@mui/material";
import { ImportExportRounded } from '@mui/icons-material'

export default function ConexaoButton() {  
    const [currentButtonColor, setCurrentButtonColor] = React.useState('default');
    const handleButtonColorChange = () => {
      if (currentButtonColor === 'default') {
        setCurrentButtonColor('disabled');
      }
      else {
        setCurrentButtonColor('default');
      }
    }


    return (
        <>         
            <Icon onClick={handleButtonColorChange}>
                <ImportExportRounded color={currentButtonColor}/>
            </Icon>   
        </>
    );
} 