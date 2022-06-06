import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { borderRight } from '@mui/system';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';

export default function OutlinedCardA(props) {
    const [text, setText] = React.useState(props.comment);
    const [albumID, setAlbumid] = React.useState(props.id);
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
      fetch(`http://jsonplaceholder.typicode.com/albums/${albumID}/photos`)
      .then(res => res.json())
      .then(photos => setPhotos(photos))
    })

    const card = (
        <React.Fragment>
          <ImageList sx={{ width: 500, height: 500, margin: 10 }} cols={3} rowHeight={164}>
            {photos.splice(9)}
            {photos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.url}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <CardActions sx={{alignItems: 'middle'}}>
            <Link to={`/albums/${albumID}`}><Button size="large" variant='text'>Learn More</Button></Link>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
