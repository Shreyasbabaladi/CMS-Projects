import React from 'react';
import { marked } from 'marked';
const Post = ({article}) => {
  console.log(article);
  const { name, img, description} = article.fields;
  const ImageURL = img.fields.file.url;
  const postDescription = marked(description)
  return (
    <div className='post'>
      <h1 className='title'>{name}</h1>
      {img && <img className='featuredImage' src={ImageURL} alt={name} title={name}/>}
      <section className='' dangerouslySetInnerHTML={{ __html:postDescription}}/>
    </div>
  )
}

export default Post;