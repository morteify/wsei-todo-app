import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from '../../reducers/todoReducer';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  height: 50px;
  background-color: beige;
  border-bottom-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 15px;
`;

export default function ToDoListItem({ id, date, title, description }: Partial<Todo>) {
  const navigation = useNavigation();

  const handleEditButtonPress = (): void => {
    navigation.navigate('AddToDo', {
      todoId: id,
      todoDate: date,
      todoTitle: title,
      todoContent: description,
    });
  };

  return (
    <Container>
      <View>
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{id.toString()}</Text>
      </View>
      <TouchableOpacity onPress={handleEditButtonPress}>
        <Text>Edit</Text>
      </TouchableOpacity>
    </Container>
  );
}
