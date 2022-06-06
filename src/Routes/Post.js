import React from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {
  const postID = (useParams().postID);

  return (
    <div>Post</div>
  )
}
