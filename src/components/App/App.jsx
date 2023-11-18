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
import { useSelector } from 'react-redux';
import { selectTodos } from 'components/redux/selectors';

export const App = () => {
  const todos = useSelector(selectTodos);
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

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

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
