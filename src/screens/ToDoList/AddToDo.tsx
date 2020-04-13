import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  GestureResponderEvent,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { addTodo } from "../../actions";

const Container = styled.View`
  margin-top: 100px;
  background-color: beige;
  border-bottom-width: 1px;
`;

interface routeParams {
  todoTitle?: string;
  todoContent?: string;
}
export default function AddToDo({ navigation, route }) {
  const dispatch = useDispatch();
  const { todoTitle, todoContent }: routeParams = route.params;
  const [currentTodo, setCurrentTodo] = useState<string | null>(todoContent);
  const [currentTodoTitle, setCurrentTodoTitle] = useState<string | null>(
    todoTitle
  );

  navigation.setOptions({
    tabBarVisible: false,
  });
  const handleButtonPress = (event: GestureResponderEvent) => {
    dispatch(
      addTodo({
        id: Symbol(Date.now()),
        date: Date.now(),
        title: currentTodoTitle,
        description: currentTodo,
      })
    );
    setCurrentTodo("");
    navigation.goBack();
  };

  return (
    <Container>
      <Text>Add Your Todo</Text>

      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setCurrentTodoTitle(text)}
        value={currentTodoTitle}
      />
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setCurrentTodo(text)}
        value={currentTodo}
      />
      <Button title="Add todo" color="#841584" onPress={handleButtonPress} />
    </Container>
  );
}
