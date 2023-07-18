import React, { useState } from 'react';
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Links = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const pages = ['Home', 'My orders', 'Cart']

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, order: { xs: 0 } }} >
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={handleOpenNavMenu}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center" >{page}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: 4, order: { md: 1 } }} >
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={handleCloseNavMenu}
                        sx={{
                            my: 2,
                            color: 'inherit',
                            display: 'block',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.04)'
                            },
                            fontSize: 'small'
                        }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
        </>
    );
};

export default Links;