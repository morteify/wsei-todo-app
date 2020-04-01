import React, { useState } from "react";
import { Text, View } from "react-native";
import { Todo } from "../../reducers/todoReducer";
import styled from "styled-components/native";

const Container = styled.View`
  height: 50px;
  background-color: beige;
  border-bottom-width: 1px;
`;

export default function ToDoListItem({ title, description }: Partial<Todo>) {
  return (
    <Container>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </Container>
  );
}
