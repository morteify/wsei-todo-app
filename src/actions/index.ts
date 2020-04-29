import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_CHECK } from "./../constants/actionTypes";

interface Todo {
  id: Symbol;
  date: number;
  title: string;
  description: string;
  checked: boolean;
}

export function addTodo(payload: Todo) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function removeTodo(payload: Todo) {
  return {
    type: REMOVE_TODO,
    payload,
  };
}

export function updateTodo(payload: Partial<Todo>) {
  return {
    type: UPDATE_TODO,
    payload,
  };
}

export function toggleCheck(payload: Pick<Todo, "id">) {
  return {
    type: TOGGLE_CHECK,
    payload,
  };
}
