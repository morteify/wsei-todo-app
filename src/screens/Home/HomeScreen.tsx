import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

const StyledText = styled.Text`
  color: red;
`;

export default function HomeScreen() {
  return (
    <View>
      <StyledText>Home</StyledText>
    </View>
  );
}
