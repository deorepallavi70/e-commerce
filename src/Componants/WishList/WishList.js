import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Container } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
import { wishlist } from '../Home/ShoppingCard';

export const WishList = () => {
    const [wishList, setWishList] = React.useState(wishlist)
    const theme = useTheme();
    const deleteHandler = (id) => {
        wishlist.splice(id, 1);
        setWishList([...wishList]);
        console.log("deleted", wishlist)
    }
    return (

        <Container >
            <h2>Wishlist</h2>
            {wishList ? wishList.map((eachCard, id) => {
                return <><Card sx={{ display: 'flex', justifyContent: 'space-around', alignItems: "center", width: '80%', margin: '10px auto' }}>

                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={eachCard.img}
                        alt="Live from space album cover"
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {eachCard.title}
                            </Typography>
                            <div><Typography variant="subtitle1" color="text.secondary" component="div">
                                {eachCard.rating}
                            </Typography></div> <br />
                            <div style={{ display: 'flex', gap: "20px" }}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    ₹ {eachCard.price}
                                </Typography>
                            </div>
                        </CardContent>
                    </Box>
                    <CardContent >
                        <DeleteSharpIcon onClick={() => deleteHandler(id)} />
                    </CardContent>
                </Card>
                </>
            })
                : null}
        </Container>
    );
}