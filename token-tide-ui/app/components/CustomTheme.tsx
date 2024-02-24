"use client"
import { ThemeProvider, createTheme } from "@mui/material";
import { ptBR } from '@mui/x-date-pickers/locales';


const theme = createTheme({

    palette: {
        primary: {
            main: '#0495a6',
        },
        secondary: {
            main: '#fcaa68',
        },
    },
    components: {
        // Name of the component
        MuiAppBar: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              backgroundColor: '#e0f7fa',
              color: "rgba(0, 0, 0, 0.87)",
              boxShadow: "none",
              borderBottom: "1px solid rgba(0, 0, 0, 0.12)"
            },
          },
        },
      },      
},  ptBR);

export default function CustomTheme({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}