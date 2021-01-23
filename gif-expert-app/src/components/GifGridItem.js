import React from 'react';

const GifGridItem = ({ id, title, url }) => {
  return <div className='card animate__animated animate__bounce'>
      <img src={url} alt={title}/>
      <p><small>{title}</small></p>
  </div>;
};

export default GifGridItem;
