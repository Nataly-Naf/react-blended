import { Component, useState } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export const Gallery = () => {

	const [searchQuery, setSearchQuery] = useState('');
  
	const onSubmit = query => {
		if (!query) {
			return;
		}
		setSearchQuery(query);
	};

	return (
		<>
			<SearchForm onSubmit={onSubmit} />
			<Grid>
				<GridItem>
					<CardItem>
						<img src='' alt=''/>
					</CardItem>
				</GridItem>
			</Grid>
			<Button>Load more</Button>
			<Text textAlign="center">Sorry. There are no images ... 😭</Text>
		</>
	);
};

