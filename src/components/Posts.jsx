import React from 'react'
import logo from '../assets/DefaultLogo.png'
import Post from './Post'
function Posts() {
    const posts=[{
        id: '123',
        username:"Joe Doe",
        profilePic: logo,
        postPhoto: profile,
        caption: 'Hello from the caption'

    }, {
        id: '234',
        username:"Mike Jones",
        profilePic: logo,
        postPhoto: profile,
        caption: 'Hello from the 2nd caption'

    }]
  return (
    <div>{posts.map((post) => {
        <Post
        key={id}
        username={post.username}
        profilePice={post.profilePic}
        postPhoto={post.postPhoto}
        caption={post.caption}
        />
    })}</div>
  )
}

export default Posts