import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'


function ProductCard() {
    return (
        <Grid item xs={6} md={4} for1100={3} for850={4}>
            <Card sx={{ maxWidth: 260}}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height='200'
                    image="../steklo22.jpg"
                />
                <CardContent sx={{ padding: '5px' }}>
                    <Typography gutterBottom variant="h6" component="div" >
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: '16px ' }}>
                        Lizards are a widespread group of squamate reptiles
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductCard