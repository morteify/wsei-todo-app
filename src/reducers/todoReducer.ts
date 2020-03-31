import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from "./../constants/actionTypes";
import { AnyAction } from "react-redux";
import { addTodo, updateTodo, removeTodo } from "../actions";

type Action =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof updateTodo>
  | ReturnType<typeof removeTodo>;

interface Todo {
  id: Symbol;
  date: Date;
  content: string;
}

interface Todos {
  todos: Array<Todo>;
}

const initialState: Todos = {
  todos: []
};

function todoReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: action.payload };
    case REMOVE_TODO:
      const filteredTodos = state.todos.filter((item: Todo, index: number) => {
        return item.id !== action.payload;
      });
      return { ...state, todos: filteredTodos };
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((item: Todo, index: number) => {
        if (item.id === action.payload.id) {
          item.content = action.payload.newContent;
        }
      });
      return { ...state, todos: updatedTodos };
    default:
      return state;
  }
}

export default todoReducer;
