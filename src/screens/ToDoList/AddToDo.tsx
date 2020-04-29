import React, { useState } from "react";
import { Text, View, TextInput, Button, Alert, GestureResponderEvent } from "react-native";
import { Input } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { addTodo, updateTodo } from "../../actions";
import { Todo, TodoReducer } from "../../reducers/todoReducer";
import moment from "moment";
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
  todoTitle: "",
  todoContent: "",
};

const Container = styled.View`
  margin-top: 100px;
  border-bottom-width: 1px;
`;

const Title = styled.Text`
  font-size: 32px;
`;

const TodoInput = styled(Input)`
  height: 40px;
  border-color: gray;
  border-width: 1px;
`;

export default function AddToDo({ navigation, route }: AddToDoProps) {
  const dispatch = useDispatch();
  const { todoId, todoDate, todoTitle, todoContent }: routeParams = route.params ? route.params : defaultTodo;
  const doesTodoAlreadyExist = useSelector((state: TodoReducer): Array<Todo> => state.todos as Array<Todo>)
    .filter((item: Todo) => item.id == todoId)
    .some((item: Todo) => item);

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
          checked: false,
        })
      );
    } else {
      dispatch(
        addTodo({
          id: Symbol(Date.now()),
          date: Date.now(),
          title: currentTodoTitle,
          description: currentTodo,
          checked: false,
        })
      );
    }
    setCurrentTodo("");
    navigation.goBack();
  };

  return (
    <Container>
      <Title>{doesTodoAlreadyExist ? "Edit your todo" : "Add your todo"}</Title>
      <Text>{moment(todoDate).format("MM/DD/YYYY HH:mm")}</Text>

      <TodoInput placeholder="Title" onChangeText={(text) => setCurrentTodoTitle(text)} value={currentTodoTitle} />
      <TodoInput placeholder="Description" onChangeText={(text) => setCurrentTodo(text)} value={currentTodo} />
      <Button title={doesTodoAlreadyExist ? "Edit todo" : "Add todo"} color="#841584" onPress={handleButtonPress} />
    </Container>
  );
}
