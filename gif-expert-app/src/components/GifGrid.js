import React, { Fragment } from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <Fragment>
      <h3>{category}</h3>

      {loading && <p>Loading...</p>}
      <ol>
        {images.map((img) => (
          <GifGridItem {...img} key={img.id} />
        ))}
      </ol>
    </Fragment>
  );
};

export default GifGrid;
