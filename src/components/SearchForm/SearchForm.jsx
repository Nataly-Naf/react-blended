import { Component } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({onSubmit}) => {

	const handleSubmit = (evt) => {
		evt.preventDefault();
		onSubmit(evt.target.elements.searchInput.value);

}

	return (
		<SearchFormStyled onSubmit={handleSubmit}>
			<InputSearch name='searchInput'/>
			<FormBtn>
				<FiSearch/>
			</FormBtn>
		</SearchFormStyled>
	)
};
