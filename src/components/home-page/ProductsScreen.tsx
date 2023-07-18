import { Box, Grid } from '@mui/material'
import ProductCard from './ProductCard'
import Search from './Search'
import CategoryMenu from './CategoryMenu'

function ProductsScreen() {
    return (

        <>
            <Search />
            <Box display={'flex'}>
                <CategoryMenu/>
                <Box flexGrow={1} padding={'5px'}>
                    <Grid container spacing={1} padding={0}>
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </Grid>
                </Box>

            </Box>

        </>


    )
}

export default ProductsScreen