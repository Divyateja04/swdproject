import React, { useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useParams } from 'react-router-dom';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Box } from '@mui/system';

export default function Home() {
  const postID = (useParams().postID);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${postID}/comments`)
    .then(res => res.json())
    .then(comments => setComments(comments));
  })

  return (
    <div>
      <h1 style={{margin: 0}}>Post Comments</h1>
      <hr />
      <Timeline>
      {
        comments.map(comment => {
          return (
            <Box sx={{border: 1, margin: 1}}>
              <h4>{comment.body}</h4>
              <TimelineItem>
                <TimelineOppositeContent>
                  Name: {comment.name}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>{comment.email}</TimelineContent>
              </TimelineItem>
            </Box>
            );
          }
        )
      }
      </Timeline>
    </div>
  )
}
