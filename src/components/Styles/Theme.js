import { createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors"

/* Mudar o tema inicial do Material UI para o tema proprio do programa
Palette: Paleta de cores principal 
Components: Mudar as propriedades originais dos componentes
    MuiButton: propriedades do Button
    MuiMenuItem: propriedades do MenuItem
        stylesOverrides: sobrescrever os estilos originais*/
const theme = createTheme({
    palette: {
        primary: {
            main: '#e9e9e9'
        },
        secondary: { 
            main: orange[400]
        },
       
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: '1rem',
                    textTransform: 'none',
                    color: '#000'
                },
                text: {
                    '&:hover':{
                        color: orange[300],
                        
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        color: '#fff',
                        backgroundColor: 'rgba(255,171,64,0.7)'
                    }
                }
            }
        },
       MuiGrid2: {
            styleOverrides: {
                container: {
                    margin: '0',
                    padding: '0',
                },
            }
        }
    }
});



export default theme;