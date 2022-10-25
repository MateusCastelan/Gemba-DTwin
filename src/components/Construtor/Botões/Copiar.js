import React from "react";
import { Snackbar, Icon, CircularProgress } from "@mui/material";
import { ContentCopy } from '@mui/icons-material'
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

export default function CopiarButton() {
    const [openAlert, setOpenAlert] = React.useState(false);
    
    const timer = React.useRef();
    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);

    const handleClick = () => {
        timer.current = window.setTimeout(() => {
            setOpenAlert(true);
        }, 500);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
        return;
        } else {   
           setOpenAlert(false);
        }
    };

    return(
        <>         
            <Icon onClick={handleClick}>
                <ContentCopy/>
            </Icon>             
            <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Item copiado!
                </Alert>
            </Snackbar>        
        </>
    )
}






