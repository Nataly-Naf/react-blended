import { Component, useEffect, useState } from 'react';
import { makeNormalizedPhoto } from 'helpers/makeNormalizedPhotos';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const onSubmit = query => {
    if (!query) {
      return;
    }
    setSearchQuery(query);
  };
  const fetchImages = async () => {
    const {
      data: { photos },
    } = await ImageService.getImages({ query: searchQuery, page });

    setImages(makeNormalizedPhoto(photos));
  };
  useEffect(() => {
    if (!searchQuery) return;

    fetchImages();
  }, [searchQuery, page]);

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      <Grid>
        {images.map(({ id, alt, avg_color, medium, large }) => {
          return (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={medium} alt={alt} />
              </CardItem>
            </GridItem>
          );
        })}
      </Grid>
      <Button>Load more</Button>
      <Text textAlign="center">Sorry. There are no images ... 😭</Text>
    </>
  );
};
