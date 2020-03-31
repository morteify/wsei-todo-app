import React, { useState } from "react";
import {
  TextInput,
  GestureResponderEvent,
  Button,
  Text,
  ScrollView,
  FlatList
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../actions";
import { TodoReducer, Todos, Todo } from "../../reducers/todoReducer";

export default function ToDoList() {
  const dispatch = useDispatch();
  const [currentTodo, setCurrentTodo] = useState<string | null>("");
  const todos: Array<Todo> = useSelector((state: TodoReducer) => state.todos);

  const handleButtonPress = (event: GestureResponderEvent) => {
    dispatch(
      addTodo({
        id: Symbol(Date.now()),
        date: Date.now(),
        content: currentTodo
      })
    );
    setCurrentTodo("");
  };

  return (
    <ScrollView>
      <Text>ToDo</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={text => setCurrentTodo(text)}
        value={currentTodo}
      />
      <Button
        onPress={handleButtonPress}
        title="Add todo"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      <FlatList
        data={todos}
        renderItem={({ item }) => <Text>{item.content}</Text>}
        keyExtractor={(item: Todo) => item.id.toString()}
      />
    </ScrollView>
  );
}
