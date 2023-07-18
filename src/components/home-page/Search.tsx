import { InputAdornment, TextField, useMediaQuery } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LoadingButton from '@mui/lab/LoadingButton';
import { createTheme, ThemeProvider, styled, useTheme } from '@mui/material/styles';
import { Box } from "@mui/material"


const theme = createTheme({
    palette: {
        primary: {
            main: '#424242'
        }
    }
})

const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') { 
        event.preventDefault();

        alert('Hello bratunea')
    }
};

const SearchBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '40px',
    alignItems: 'stretch',
    padding: '16px 16px',
    paddingTop: '20px',
    paddingBottom: '20px',
    justifyContent: 'center',
    marginBottom: '20px '
}))

function Search() {

    const themeGlob = useTheme();
    const isMobile = useMediaQuery(themeGlob.breakpoints.down('sm'));

    return (
        <SearchBox>
            <ThemeProvider theme={theme}>
                <TextField
                    type="search"
                    fullWidth
                    placeholder='Search products'
                    sx={{ 
                        borederWidth: '1px',
                        width: {
                            md: '70%'
                        },
                        height: { xs: '30px' }
                     }}
                    onKeyDown={handleKeyPress}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position='end' >
                                <LoadingButton sx={{
                                    bgcolor: '#F1F1F1',
                                    color: 'inherit',
                                    minWidth: {
                                        xs: '20px',
                                        md: '90px'
                                    }
                                }} >
                                    <SearchIcon />
                                    {isMobile ? '' : 'Search'}
                                </LoadingButton>
                            </InputAdornment>
                        )
                    }}
                />
            </ThemeProvider>
        </SearchBox>
    )
}

export default Search