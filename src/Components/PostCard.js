import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { borderRight } from '@mui/system';

export default function OutlinedCard(props) {
    const [text, setText] = React.useState(props.comment);
    const [postID, setPostid] = React.useState(props.id);

    const card = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            </Typography>
            <Typography variant="body2">
              {text}
            </Typography>
          </CardContent>
          <CardActions sx={{alignSelf: borderRight}}>
            <Link to={`/posts/${postID}`}><Button size="large" variant='text'>Learn More</Button></Link>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
