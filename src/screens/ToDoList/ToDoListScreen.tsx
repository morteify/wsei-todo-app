import React, { useState } from "react";
import {
  TextInput,
  GestureResponderEvent,
  Button,
  Text,
  ScrollView,
  FlatList,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TodoReducer, Todos, Todo } from "../../reducers/todoReducer";
import ToDoListItem from "./ToDoListItem";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToDo from "./AddToDo";
import { useNavigation } from "@react-navigation/native";

const FloatingButton = styled.TouchableOpacity`
  background-color: red;
  width: 75px;
  height: 75px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 10px;
  right: 10px;
`;

const Container = styled.View`
  flex: 1;
`;

function ToDoList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const todos: Array<Todo> = useSelector((state: TodoReducer) => state.todos);

  return (
    <Container>
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoListItem title={item.title} description={item.description} />
          )}
          keyExtractor={(item: Todo) => item.id.toString()}
        />
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate("AddToDo")}>
        <Text>Add Todo</Text>
      </FloatingButton>
    </Container>
  );
}
const ToDoStack = createStackNavigator();

function ToDoListScreen() {
  return (
    <ToDoStack.Navigator mode="modal">
      <ToDoStack.Screen
        name="ToDoList"
        component={ToDoList}
        options={{ headerShown: false }}
      />
      <ToDoStack.Screen
        name="AddToDo"
        component={AddToDo}
        options={{ headerShown: false }}
      />
    </ToDoStack.Navigator>
  );
}

export default ToDoListScreen;
