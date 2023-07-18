import { AppBar, Toolbar } from "@mui/material";
import Links from "./Links";
import Logo from "./Logo";
import User from "./User";


const NavBar = () => {
    return (
        <AppBar sx={{background: 'white', position: 'sticky'}}>
            <Toolbar>
                <Logo/>
                <Links/>
                <User/>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;