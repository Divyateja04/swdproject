import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import OutlinedCard from '../Components/PostCard';
import OutlinedCardA from '../Components/AlbumCard';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home() {
  const ID = (useParams().userID);
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);


  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/users/${ID}`)
    .then(res => res.json())
    .then(users => setUser(users));

    fetch(`http://jsonplaceholder.typicode.com/users/${ID}/albums`)
    .then(res => res.json())
    .then(albums => setAlbums(albums));

    fetch(`http://jsonplaceholder.typicode.com/users/${ID}/posts`)
    .then(res => res.json())
    .then(posts => setPosts(posts));
  }, [ID]);


  return (
    <div>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <br />
          <Avatar sx={{ bgcolor: deepOrange[500], width: 50, height: 50 }}></Avatar>
          <Typography component="h1" variant="h5">
            {user.name}
          </Typography>
        </Box>
      </Container>

      <Box
          sx={{
            margin: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <h2>Posts</h2>
              <hr/>
              {posts.map(post => {
                return (
                  <OutlinedCard key={post.id} comment={post.title} id={post.id} />
                )
              })}
            </Grid>
            <Grid item xs={6} md={6}>
              <h2>Albums</h2>
              <hr/>
              {albums.map(album => {
                return (
                  <OutlinedCardA key={album.id} comment={album.title} id={album.id} />
                )
              })}
            </Grid>
          </Grid>
        </Box> 

        
      
    </div>
    
  )
}
