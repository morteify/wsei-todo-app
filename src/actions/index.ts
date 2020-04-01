import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./../constants/actionTypes";

interface Todo {
  id: Symbol;
  date: number;
  title: string;
  description: string;
}

export function addTodo(payload: Todo) {
  return {
    type: ADD_TODO,
    payload
  };
}

export function removeTodo(payload: Todo) {
  return {
    type: REMOVE_TODO,
    payload
  };
}

export function updateTodo(payload: Todo) {
  return {
    type: UPDATE_TODO,
    payload
  };
}
