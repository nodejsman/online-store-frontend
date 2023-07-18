import Home from "./pages/HomePage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes, } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        for1100: true;
        for850: true;
        for700: true

    }
}


const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            for1100: 1100,
            for850: 850,
            for700: 700,
            lg: 1400,
            xl: 1536,
        },
    },
});

function App() {
    return (
        <>
            <ToastContainer />
            <ThemeProvider theme={theme} >
                <Routes>
                    <Route path="/auth/*" element={<AuthPage />} />
                    <Route path="/*" element={<Home />} />
                    <Route path="*" element={<h1>Page Not Found!--</h1>} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;  
