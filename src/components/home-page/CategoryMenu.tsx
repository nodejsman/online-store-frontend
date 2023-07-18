import { Home } from '@mui/icons-material'
import { ListItemDecorator } from '@mui/joy'
import { Box, Button, Divider, List, ListItem, ListItemButton, Menu, MenuItem, Paper, useMediaQuery, useTheme } from '@mui/material'
import { useState } from 'react';


const categories = ['Electronic', 'Smartphone', 'Kids', 'Watches', 'Home', 'Kitchen', 'Beauty', 'Cars & Motot', 'Parties & Events', 'Women\'s Fashion', 'Sexual Wellness']

function CategoryMenu() {

    const themeGlob = useTheme();
    const isMobile = useMediaQuery(themeGlob.breakpoints.down('sm'));


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



    return (
        isMobile ?
            <Box sx={{
                position: 'fixed',
                bottom: 0,
                background: '#ffffffd9',
                padding: '0 30px 0 30px',
                border: '1px solid black',
                borderRadius: '10px 10px 0 0'
            }} >
                <Button
                    sx={{ width: '80px', color: 'inherit', }}
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Home
                </Button>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    sx={{
                        width: '300px'
                    }}
                >
                    {categories.map(ctg => (
                        <MenuItem key={ctg} onClick={handleClose} > {ctg} </MenuItem>
                    ))}
                </Menu>
            </Box>
            :
            <Box
                sx={{
                    display: 'flex',
                    marginRight: '20px',
                    position: 'sticky',
                    top: '80px',
                    alignSelf: 'start',
                }}
            >
                <List>
                    {categories.map(cat => (
                        <ListItem key={cat} sx={{ fontFamily: "'Montserrat', regular;", paddingTop: '0', paddingBottom: '0' }}>
                            <ListItemButton sx={{ whiteSpace: { for700: 'nowrap' } }} >
                                <ListItemDecorator sx={{ marginRight: '10px ' }}>
                                    <Home />
                                </ListItemDecorator>
                                {cat}
                            </ListItemButton>
                        </ListItem>
                    ))}

                </List>
                <Divider orientation="vertical" flexItem />
            </Box>
    )
}

export default CategoryMenu