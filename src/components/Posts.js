import React from 'react'
import Post from './Post'

const Posts = ({ articles }) => {
  return (
    <div>
      {
        articles.map((article, index) => <Post key={index} article={article} /> )
      }
    </div>
  )
}

export default Posts;