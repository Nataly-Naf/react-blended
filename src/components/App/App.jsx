import { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectFilteredTodos } from 'redux/selectors';
import { setFilter } from 'redux/todoSlice';

export const App = () => {
  const todos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  // const [todos, setTodos] = useState([]);

  // const addTodo = text => {
  //   const todo = {
  //     id: nanoid(),
  //     text,
  //   };

  //   setTodos(prevtodos => [...prevtodos, todo]);
  // };

  // const handleSubmit = data => {
  //   addTodo(data);
  // };

  // const deleteTodo = id => {
  //   setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  // };

  const filterValue = useSelector(selectFilter);

  const handleInput = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <input type="text" value={filterValue} onChange={handleInput} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
