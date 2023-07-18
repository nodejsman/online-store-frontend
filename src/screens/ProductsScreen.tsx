import { Box } from '@mui/material'
import CategoryMenu from '../components/home-page/CategoryMenu'
import Search from '../components/home-page/Search'

function ProductsScreen() {
  return (
    
    <>
      <Search />
      <Box sx={{ display: 'flex' }}>
        <CategoryMenu />
        <ProductsScreen />
      </Box>
    </>
  )
}

export default ProductsScreen