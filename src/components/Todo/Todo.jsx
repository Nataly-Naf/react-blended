import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { deleteTodo, editTodo } from 'components/redux/todoSlice';
import { useDispatch } from 'react-redux';

export const Todo = ({ text, counter, id }) => {
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = evt => {
    const result = prompt('Введіть нове завдання', text);
    dispatch(editTodo({ id, text: result }));
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => handleDelete(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <button type="button" onClick={handleEditTodo}>
          Edit
        </button>
      </TodoWrapper>
    </>
  );
};
