import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Todo } from "../../reducers/todoReducer";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCheck } from "../../actions";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Container = styled.View`
  /* background-color: beige; */
  border-bottom-width: 1px;
  border-bottom-color: #e0e0e0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  padding-left: 0;
`;

const Content = styled.View`
  max-width: 85%;
`;

const TodoTitle = styled.Text`
  font-size: 18px;
  padding-bottom: 4px;
  text-decoration-line: ${(props) => (props.checked === "checked" ? "line-through" : "none")};
`;

const TodoDescription = styled.Text`
  color: #797877;
  text-decoration-line: ${(props) => (props.checked === "checked" ? "line-through" : "none")};
`;

const SubContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const CheckboxContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  padding-right: 15px;
`;

export default function ToDoListItem({ id, date, title, description }: Partial<Todo>) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [currentCheckbox, setCurrentCheckbox] = useState<"blank" | "checked">("blank");
  const handleEditButtonPress = (): void => {
    navigation.navigate("AddToDo", {
      todoId: id,
      todoDate: date,
      todoTitle: title,
      todoContent: description,
    });
  };

  const handleCheckboxPress = (): void => {
    dispatch(toggleCheck({ id }));
    if (currentCheckbox === "blank") setCurrentCheckbox("checked");
    else setCurrentCheckbox("blank");
  };

  return (
    <Container>
      <TouchableOpacity onPress={handleCheckboxPress}>
        <SubContainer>
          <CheckboxContainer onPress={handleCheckboxPress}>
            {currentCheckbox === "blank" ? (
              <MaterialCommunityIcon name="checkbox-blank-outline" size={26} color="#B8C9AD" />
            ) : (
              <MaterialCommunityIcon name="checkbox-marked" size={26} color="#3B9B00" />
            )}
          </CheckboxContainer>
          <Content>
            <TodoTitle checked={currentCheckbox}>{title}</TodoTitle>
            <TodoDescription checked={currentCheckbox}>{description}</TodoDescription>
          </Content>
        </SubContainer>
      </TouchableOpacity>
      <View>
        <TouchableOpacity onPress={handleEditButtonPress}>
          <FontAwesomeIcon name="edit" size={22} color="#9B9B9B" />
        </TouchableOpacity>
      </View>
    </Container>
  );
}
