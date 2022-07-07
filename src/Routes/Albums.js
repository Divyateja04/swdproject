import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import {Link} from '@mui/material';
import { CardActions } from '@mui/material';
import { ImageList } from '@mui/material';
import { ImageListItem } from '@mui/material';
import { useParams } from 'react-router-dom';

export default function Albums(props) {
    const albumID = useParams().albumID;
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/albums/${albumID}/photos`)
        .then(res => res.json())
        .then(photos => setPhotos(photos))
    })

    const card = (
        <React.Fragment>
          <ImageList cols={3}>
            {photos.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.url}`}
                  srcSet={`${item.url}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
          <CardActions sx={{alignItems: 'middle'}}>
            <Link to={`/1`}><Button size="large" variant='text'>Go to home</Button></Link>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Box sx={{ minWidth: 275 }} style={{padding: 10, alignSelf: 'center'}}>
            <Card variant="outlined" style={{alignSelf: 'center'}}>{card}</Card>
        </Box>
    );
}
