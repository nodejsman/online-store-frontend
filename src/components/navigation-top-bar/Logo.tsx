import StoreIcon from '@mui/icons-material/Store';
import { Box, Typography } from "@mui/material";

const Logo = () => {
    return (
        <Box sx={
            {
                display: 'flex',
                flexGrow: { xs: 1, md: 0 },
                alignItems: 'center',
                order: { xs: 1, md: 1 }
            }}>

            <StoreIcon fontSize={'large'} />
            <Typography
                variant="h6"
                component={'a'}
                href="/"
                sx={{
                    textDecoration: 'none',
                    margin: '0 5px'
                }}
            >
                maib
            </Typography>
        </Box>
    );
};

export default Logo;