import React, { useState } from 'react';

import { FiSearch } from 'react-icons/fi';
import { FormBtn, InputSearch, SearchFormStyled } from './SearchForm.styled';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo } from 'components/redux/todoSlice';

export const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleInput = e => {
    setSearchQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    // const { query } = this.state;

    e.preventDefault();

    dispatch(
      addTodo({
        id: nanoid(),
        text: searchQuery,
      })
    );

    // this.setState({
    //   query: '',
    // });
    setSearchQuery('');
  };

  // const { query } = this.state;

  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <FormBtn type="submit">
        <FiSearch size="16px" />
      </FormBtn>
      <InputSearch
        onChange={handleInput}
        placeholder="What do you want to write?"
        name="search"
        required
        value={searchQuery}
        autoFocus
      />
    </SearchFormStyled>
  );
};
