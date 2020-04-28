import React, { useState } from "react";
import { TextInput, Alert, Modal, Text, ScrollView, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { TodoReducer, Todos, Todo } from "../../reducers/todoReducer";
import ToDoListItem from "./ToDoListItem";
import styled from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import AddToDo from "./AddToDo";
import { removeTodo } from "../../actions";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

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
  elevation: 24;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 10px;
  color: #253846;
`;

const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DeleteButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const RemoveText = styled.Text`
  color: #8f8787;
`;

const RemovalModalCenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 22;
`;

const RemovalModalContent = styled.View`
  /* width: 70px;
  height: 20px; */
  background-color: red;
`;

function ToDoList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const todos: Array<Todo> = useSelector((state: TodoReducer) => state.todos);
  const selectedTodos: Array<Todo> = todos.filter((todo: Todo, index: number) => todo.checked);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemovalButtonPress = () => {
    setModalVisible(!modalVisible);
  };

  const removeSelectedTodos = () => {
    selectedTodos.forEach((todo: Todo) => {
      dispatch(removeTodo({ id: todo.id }));
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleText>My Todos</TitleText>
        <DeleteButtonContainer onPress={handleRemovalButtonPress}>
          <RemoveText>Remove</RemoveText>
          <MaterialCommunityIcon name="delete" size={28} color="#D65134" />
          <RemovalModalCenteredView>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
              }}
            >
              <RemovalModalCenteredView>
                <RemovalModalContent>
                  <Text>Are you sure you want to remove selected items?</Text>
                  <Text>{JSON.stringify(selectedTodos)}</Text>
                  <Button
                    onPress={handleRemovalButtonPress}
                    title="Cancel"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                  <Button
                    onPress={() => {
                      removeSelectedTodos();
                      handleRemovalButtonPress();
                    }}
                    title="Delete"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </RemovalModalContent>
              </RemovalModalCenteredView>
            </Modal>
          </RemovalModalCenteredView>
        </DeleteButtonContainer>
      </HeaderContainer>
      <ScrollView>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoListItem id={item.id} date={item.date} title={item.title} description={item.description} />
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
      <ToDoStack.Screen name="ToDoList" component={ToDoList} options={{ headerShown: false }} />
      <ToDoStack.Screen name="AddToDo" component={AddToDo} options={{ headerShown: false }} />
    </ToDoStack.Navigator>
  );
}

export default ToDoListScreen;
