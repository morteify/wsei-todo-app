import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./../constants/actionTypes";

export function addTodo(payload) {
  return {
    type: ADD_TODO,
    payload
  };
}

export function removeTodo(payload) {
  return {
    type: REMOVE_TODO,
    payload
  };
}

type UpdateTodoPaylod = {
  id: symbol;
  newContent: string;
};

export function updateTodo(payload: UpdateTodoPaylod) {
  return {
    type: UPDATE_TODO,
    payload
  };
}
