import { combineReducers } from "redux";

import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";

export const reducers = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});
