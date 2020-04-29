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
  background-color: #9bc67f;
  color: red;
  width: 65px;
  height: 65px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 2;
  bottom: 10px;
  right: 10px;
  elevation: 8;
`;

const Container = styled.View`
  flex: 1;
  padding: 10px;
  background-color: #fff;
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
  margin-top: 22px;
`;

const RemovalModalContent = styled.View`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  elevation: 5;
`;

const RemovalButtonContainer = styled.View`
  flex-direction: row;
  padding-top: 15px;
  justify-content: center;
`;

const RemovalButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  padding: 12px;
  border-radius: 4px;
  min-width: 105px;
  elevation: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 17.5px;
  margin-vertical: 8px;
`;

const RemovalButtonText = styled.Text`
  color: #fff;
`;

const RemovalModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.45);
`;

const RemovalModalText = styled.Text`
  font-size: 18px;
  max-width: 80%;
  text-align: center;
`;

const NoDataContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  margin-top: 25%;
  padding: 5px;
`;

const NoDataImage = styled.Image`
  width: 100%;
  height: 250px;
`;

function ToDoList() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const todos: Array<Todo> = useSelector((state: TodoReducer) => state.todos);
  const selectedTodos: Array<Todo> = useSelector((state: TodoReducer) =>
    state.todos.filter((todo: Todo, index: number) => todo.checked === true)
  );
  const [modalVisible, setModalVisible] = useState(false);

  const handleRemovalButtonPress = () => {
    setModalVisible(!modalVisible);
  };

  const removeSelectedTodos = () => {
    selectedTodos.forEach((todo: Todo) => {
      dispatch(removeTodo(todo));
    });
  };

  return (
    <Container>
      <HeaderContainer>
        <TitleText>My Todos</TitleText>
        <DeleteButtonContainer onPress={handleRemovalButtonPress} disabled={!selectedTodos.length}>
          {!selectedTodos.length ? (
            <RemoveText>Remove</RemoveText>
          ) : (
            <RemoveText>Wybrano: {selectedTodos.length}</RemoveText>
          )}
          <MaterialCommunityIcon name="delete" size={28} color={selectedTodos.length ? "#BE0000" : "#9B9B9B"} />
          <RemovalModalCenteredView>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
              <RemovalModalBackground>
                <RemovalModalCenteredView>
                  <RemovalModalContent>
                    <RemovalModalText>Are you sure you want to remove selected items?</RemovalModalText>
                    <RemovalButtonContainer>
                      <RemovalButton onPress={handleRemovalButtonPress} backgroundColor="#8f8787">
                        <RemovalButtonText>Cancel</RemovalButtonText>
                      </RemovalButton>

                      <RemovalButton
                        onPress={() => {
                          removeSelectedTodos();
                          handleRemovalButtonPress();
                        }}
                        backgroundColor="#BE0000"
                      >
                        <RemovalButtonText>Remove</RemovalButtonText>
                      </RemovalButton>
                    </RemovalButtonContainer>
                  </RemovalModalContent>
                </RemovalModalCenteredView>
              </RemovalModalBackground>
            </Modal>
          </RemovalModalCenteredView>
        </DeleteButtonContainer>
      </HeaderContainer>
      <ScrollView>
        {!todos.length && (
          <NoDataContainer>
            <NoDataImage resizeMode="contain" source={require("../../../assets/no-data.png")} />
            <Text>Your Todo list is empty</Text>
          </NoDataContainer>
        )}
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <ToDoListItem id={item.id} date={item.date} title={item.title} description={item.description} />
          )}
          keyExtractor={(item: Todo) => item.id.toString()}
        />
      </ScrollView>
      <FloatingButton onPress={() => navigation.navigate("AddToDo")}>
        <MaterialCommunityIcon name="plus" size={28} color="#fff" />
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
