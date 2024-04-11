import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

export default function EventCard() {
    return (
        <Card sx={{ maxWidth: 300, paddingBottom: 1 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                // action={
                //     <IconButton aria-label="settings">
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        lorem
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, sit.
                    </Typography>

                    <p className='mt-3'>
                        Event Start At 7.00 PM
                    </p>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" variant='outlined'>
                    Reserve Slot For ₹100
                </Button>
            </CardActions>
        </Card>
    );
}