import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, TOGGLE_CHECK } from "../constants/actionTypes";
import { AnyAction } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../actions";

type Action = ReturnType<typeof addTodo> | ReturnType<typeof updateTodo> | ReturnType<typeof removeTodo>;

export interface Todo {
  id: Symbol;
  date: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface Todos {
  todos: Array<Todo>;
}

const initialState: Todos = {
  todos: [],
};

function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case REMOVE_TODO:
      const filteredTodos = state.todos.filter((item: Todo, index: number) => {
        return item.id !== action.payload.id;
      });
      return { ...state, todos: filteredTodos };

    case UPDATE_TODO:
      const updatedTodos = state.todos.map((item: Todo, index: number) => {
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.description = action.payload.description;
        }
        return item;
      });
      return { ...state, todos: updatedTodos };

    case TOGGLE_CHECK:
      const markedTodos = state.todos.map((item: Todo, index: number) => {
        if (item.id === action.payload.id) {
          item.checked = !item.checked;
        }
        return item;
      });
      return { ...state, markedTodos };

    default:
      return state;
  }
}

export type TodoReducer = ReturnType<typeof todoReducer>;
export default todoReducer;
