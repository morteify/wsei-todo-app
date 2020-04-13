import React from "react";
import { StyleSheet, Text, View, Settings } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ToDoListScreen from "./src/screens/ToDoList/ToDoListScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import { Provider } from "react-redux";
import store from "./src/store";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="ToDoList" component={ToDoListScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
