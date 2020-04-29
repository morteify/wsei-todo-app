import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/Home/HomeScreen";
import ToDoListScreen from "./src/screens/ToDoList/ToDoListScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import { Provider } from "react-redux";
import store from "./src/store";
import { StatusBar } from "react-native";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            keyboardHidesTabBar: true,
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcon name="home" size={28} color={color} />,
            }}
          />
          <Tab.Screen
            name="ToDoList"
            component={ToDoListScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcon name="format-list-checks" size={28} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ focused, color, size }) => (
                <MaterialCommunityIcon name="settings" size={28} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
