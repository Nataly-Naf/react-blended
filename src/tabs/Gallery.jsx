import { Component, useEffect, useState } from 'react';
import { makeNormalizedPhoto } from 'helpers/makeNormalizedPhotos';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';
import { DnaSpiner } from 'components/spiner/Spiner';

export const Gallery = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = query => {
    if (!query) {
      return;
    }
    setSearchQuery(query);
    setPage(1);
    setImages([]);
    setShowLoadMore(false);
  };
  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const {
        data: { photos, total_results },
      } = await ImageService.getImages({ query: searchQuery, page });
      setShowLoadMore(page < Math.ceil(total_results / 15));

      setImages(prevImg => [...prevImg, ...makeNormalizedPhoto(photos)]);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!searchQuery) return;

    fetchImages();
  }, [searchQuery, page]);

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {images.length > 0 && (
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
      )}
      {showLoadMore && !isLoading && (
        <Button onClick={handleLoadMore}>Load more</Button>
      )}

      {isLoading && <DnaSpiner />}

      {images.length === 0 && (
        <Text textAlign="center">Sorry. There are no images ... 😭</Text>
      )}
    </>
  );
};
