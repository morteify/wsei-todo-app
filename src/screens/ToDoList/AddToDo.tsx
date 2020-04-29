import React, { useState, useEffect } from "react";
import { GestureResponderEvent, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
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

const Container = styled.ScrollView`
  flex: 1;
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 32px;
`;

const TodoInputContainer = styled.View`
  min-height: 20px;
  border-color: gray;
  border-width: 1px;
  margin: 0px 5px 10px 5px;
`;

const TodoTextInput = styled.TextInput`
  padding: 12.5px;
`;

const TitleText = styled.Text`
  font-weight: bold;
  font-size: 22px;
  padding-bottom: 10px;
  color: #253846;
`;

const TextDate = styled.Text`
  padding: 10px;
`;

const CustomButton = styled.TouchableOpacity`
  background-color: ${(props) => props.backgroundColor};
  padding: 12px;
  border-radius: 4px;
  elevation: 5;
  justify-content: center;
  align-items: center;
  margin-horizontal: 5px;
  margin-top: 8px;
`;

const CustomButtonText = styled.Text`
  font-size: 18px;
  max-width: 80%;
  color: #fff;
  text-align: center;
`;

export default function AddToDo({ navigation, route }: AddToDoProps) {
  const dispatch = useDispatch();
  const { todoId, todoDate, todoTitle, todoContent }: routeParams = route.params ? route.params : defaultTodo;
  const doesTodoAlreadyExist = useSelector((state: TodoReducer): Array<Todo> => state.todos as Array<Todo>)
    .filter((item: Todo) => item.id == todoId)
    .some((item: Todo) => item);

  const [currentTodo, setCurrentTodo] = useState<string | null>(todoContent);
  const [currentTodoTitle, setCurrentTodoTitle] = useState<string | null>(todoTitle);

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
      setCurrentTodo("");
      navigation.goBack();
    } else {
      if (currentTodo.length || currentTodoTitle.length) {
        dispatch(
          addTodo({
            id: Symbol(Date.now()),
            date: Date.now(),
            title: currentTodoTitle,
            description: currentTodo,
            checked: false,
          })
        );
        setCurrentTodo("");
        navigation.goBack();
      } else {
        Alert.alert(
          "Cannot add an empty Todo item",
          "Title or description, or both of them, should be provided",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }
  };

  useEffect(() => {
    const outmostStackNavigator = navigation.dangerouslyGetParent();

    outmostStackNavigator.setOptions({
      tabBarVisible: false,
    });
    return () =>
      outmostStackNavigator.setOptions({
        tabBarVisible: true,
      });
  }, []);

  return (
    <Container keyboardShouldPersistTaps="always">
      <TitleText>{doesTodoAlreadyExist ? "Edit your todo" : "Add your todo"}</TitleText>
      <TextDate>{moment(todoDate).format("MM/DD/YYYY HH:mm")}</TextDate>

      <TodoInputContainer>
        <TodoTextInput
          multiline
          placeholder="Title"
          onChangeText={(text: string) => setCurrentTodoTitle(text)}
          value={currentTodoTitle}
        />
      </TodoInputContainer>
      <TodoInputContainer>
        <TodoTextInput
          multiline
          placeholder="Description"
          onChangeText={(text: string) => setCurrentTodo(text)}
          value={currentTodo}
        />
      </TodoInputContainer>
      <CustomButton onPress={handleButtonPress} backgroundColor="#747ef3">
        <CustomButtonText>{doesTodoAlreadyExist ? "Edit todo" : "Add todo"}</CustomButtonText>
      </CustomButton>
      <CustomButton onPress={() => navigation.goBack()} backgroundColor="#8f8787">
        <CustomButtonText>Cancel</CustomButtonText>
      </CustomButton>
    </Container>
  );
}
