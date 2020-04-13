import React, { useState } from 'react';
import { Text, View, TextInput, Button, Alert, GestureResponderEvent } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { addTodo, updateTodo } from '../../actions';
import { Todo, TodoReducer } from '../../reducers/todoReducer';

const Container = styled.View`
  margin-top: 100px;
  background-color: beige;
  border-bottom-width: 1px;
`;

interface routeParams {
  todoId?: Symbol;
  todoTitle?: string;
  todoDate?: number;
  todoContent?: string;
}

interface Route {
  params: routeParams;
}

interface AddToDoProps {
  navigation: any;
  route: Route;
}

const defaultTodo = {
  todoId: Symbol(Date.now()),
  todoDate: Date.now(),
  todoTitle: '',
  todoContent: '',
};

export default function AddToDo({ navigation, route }: AddToDoProps) {
  const dispatch = useDispatch();
  const { todoId, todoDate, todoTitle, todoContent }: routeParams = route.params ? route.params : defaultTodo;
  const doesTodoAlreadyExist = useSelector((state: TodoReducer): Array<Todo> => state.todos as Array<Todo>)
    .filter((item: Todo) => item.id == todoId)
    .some((x) => x);

  const [currentTodo, setCurrentTodo] = useState<string | null>(todoContent);
  const [currentTodoTitle, setCurrentTodoTitle] = useState<string | null>(todoTitle);

  navigation.setOptions({
    tabBarVisible: false,
  });
  const handleButtonPress = (event: GestureResponderEvent) => {
    if (doesTodoAlreadyExist) {
      dispatch(
        updateTodo({
          id: todoId,
          date: todoDate,
          title: currentTodoTitle,
          description: currentTodo,
        })
      );
    } else {
      dispatch(
        addTodo({
          id: Symbol(Date.now()),
          date: Date.now(),
          title: currentTodoTitle,
          description: currentTodo,
        })
      );
    }
    setCurrentTodo('');
    navigation.goBack();
  };

  return (
    <Container>
      <Text>Add Your Todo</Text>
      <Text>{todoId.toString()}</Text>
      <Text>{todoDate}</Text>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setCurrentTodoTitle(text)}
        value={currentTodoTitle}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setCurrentTodo(text)}
        value={currentTodo}
      />
      <Button title={doesTodoAlreadyExist ? 'Edit todo' : 'Add todo'} color="#841584" onPress={handleButtonPress} />
    </Container>
  );
}
