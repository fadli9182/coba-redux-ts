import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Todo, addTodo, toggleTodo } from "../store/slices/todoSlice";
import { RootState } from "../store/store";

const Todo = () => {
  const [title, setTitle] = React.useState("");

  const todo = useSelector((state: RootState) => state.todos.todo);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  };

  return (
    <>
      <div>
        {todo.map((item: Todo) => (
          <React.Fragment key={item.id}>
            <div
              onClick={() => dispatch(toggleTodo(item.id))}
              style={{
                textDecoration: item.completed ? "line-through" : "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>{item.title}</h3>
              {item.completed ? <div>Completed</div> : <div>Not Completed</div>}
            </div>
          </React.Fragment>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
};

export default Todo;
