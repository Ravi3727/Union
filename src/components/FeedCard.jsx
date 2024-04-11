import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';
// import ReplyIcon from '@mui/icons-material/Reply';
import TextField from '@mui/material/TextField';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const FeedCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    const host = 'http://localhost:8000';

    const handleSendComment = async () => {
        try {
            fetch(`${host}/api/comment/addcomment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userId: 'user_id', comment: newComment })
            })
            setNewComment('');
            await fetchComments();
        } catch (error) {
            console.error(error);
        }
    }

    const fetchComments = async () => {
        try {
            const response = await fetch(`${host}/api/comment/getallcomments`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json();
            setComments(json);
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    const ImageRef = useRef(null);

    const enterFullscreen = () => {
        const elem = ImageRef.current;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            elem.webkitRequestFullscreen();
        }
    };

    const exitFullscreen = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
            document.webkitExitFullscreen();
        }
    };

    const handleFullscreen = () => {
        if (!document.fullscreenElement) {
            enterFullscreen();
        } else {
            exitFullscreen();
        }
    };

    return (
        <Card sx={{ maxWidth: 300 }}>
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
            <CardMedia
                // component="image"
                component="video"
                height="194"
                // image="https://images.joseartgallery.com/100736/what-kind-of-art-is-popular-right-now.jpg"
                src='../../public/video.mp4'
                alt="Media"
                ref={ImageRef}
                onClick={handleFullscreen}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, omnis.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Typography >100</Typography>
                <p className='text-base mr-2 ml-1 w-full flex justify-end'>Comments</p>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div className='mb-4 flex justify-center '>
                        <TextField
                            id="standard-textarea"
                            label="Add a comment"
                            placeholder="Add a comment"
                            multiline
                            variant="standard"
                            className='w-72'
                            onChange={handleCommentChange}
                            value={newComment}
                        />
                        <IconButton aria-label="send" onClick={handleSendComment}>
                            <SendIcon />
                        </IconButton>
                    </div>
                    {comments.map((comment, index) => (
                        <div key={index} className="flex flex-col mb-2">
                            <div className='flex'>
                                <Avatar alt="User" src={`/static/images/avatar/${index + 1}.jpg`} sx={{ width: 24, height: 24 }} className=" mr-2" />
                                <p className='text-xs'>{comment.userId}</p>
                            </div>
                            <p className="text-xs ml-8">&#8594; {comment.comment}</p>
                        </div>
                    ))}
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default FeedCard