import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  Alert,
  GestureResponderEvent
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

export default function AddToDo() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [currentTodo, setCurrentTodo] = useState<string | null>("");

  const handleButtonPress = (event: GestureResponderEvent) => {
    console.log("press");
    dispatch(
      addTodo({
        id: Symbol(Date.now()),
        date: Date.now(),
        title: "Title",
        description: currentTodo
      })
    );
    setCurrentTodo("");
    navigation.goBack();
  };

  return (
    <Container>
      <Text>add to do</Text>
      <Text>ToDo</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setCurrentTodo(text)}
        value={currentTodo}
      />
      <Button title="Add todo" color="#841584" onPress={handleButtonPress} />
    </Container>
  );
}
