import React, { useEffect, useState } from 'react'
import { Card } from '@mui/material';
import { Box } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { Grid } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
  const [userList, setUserList] = useState([]);
  
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(userList => setUserList(userList));
  })


  return (
    <div style={{ backgroundColor: 'cyan'}}>
      <h1>Home</h1>
      {userList.map(user => {
        return (
          <Card sx={{ margin: '15px'}}>
            <Box sx={{ p: 2, display: 'flex' }}>
              <Avatar variant="rounded" src="avatar1.jpg" sx={{margin: '5px', width: 90, height: 90}} />
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Typography fontWeight={700}>{user.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {user.phone}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    {user.email} <br />
                    {user.website}
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" color="text.secondary">
                    {user.address.street + ", " + user.address.suite + ", " + user.address.city}
                    <br />
                    {user.address.zipcode}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Link to={`/${user.id}`}><Button size="small" variant="contained">Learn More</Button></Link>
                </Grid>
              </Grid>
            </Box>
            <Divider />
          </Card>
        )
      })}
    </div>
  )
}
