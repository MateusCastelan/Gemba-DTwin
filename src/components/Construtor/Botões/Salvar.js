import React from "react";
import { Snackbar, Icon, CircularProgress  } from "@mui/material";
import { Save } from '@mui/icons-material'
import MuiAlert from '@mui/material/Alert';
import { orange } from '@mui/material/colors';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


export default function SaveButon() {
       
    const [openAlert, setOpenAlert] = React.useState(false);
    
    const handleClose = (reason) => {
        if (reason === 'clickaway') {
        return;
        }    
        setOpenAlert(false);
    };
    
    const [loading, setLoading] = React.useState(false);
    const timer = React.useRef();
    React.useEffect(() => {
        return () => {
          clearTimeout(timer.current);
        };
      }, []);
    
      const handleButtonClick = () => {
        if (!loading) {
          setOpenAlert(false);
          setLoading(true);
          timer.current = window.setTimeout(() => {
            setOpenAlert(true);
            setLoading(false);
          }, 2000);
        }
      };

    return (
        <>         
            <Icon onClick={handleButtonClick}>
                <Save/>
            </Icon>   
            {loading && (
                <CircularProgress
                    // color="success"
                    sx={{
                        color: orange[300],
                        position: 'absolute',
                        zIndex: 1,
                    }}
                />
            )}
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Salvo com sucesso!
                </Alert>
            </Snackbar>        
        </>
    );
} 