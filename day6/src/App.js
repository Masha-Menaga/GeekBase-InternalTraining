import React, { useState, useReducer } from "react";

const initialState = {
  user: { name: "Masha", id: 1 },
  tasks: [{ name: "task1", id: 1 }],
};
const reducerFunc = (currentState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...currentState,
        tasks: [
          ...currentState.tasks,
          {
            name: action.payload.name,
            id: action.payload.id,
          },
        ],
      };
    case "DELETE":
      return {
        ...currentState,
        tasks: currentState.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return currentState;
  }
};

const App = () => {
  const [typedValue, setTypedValue] = useState("");
  const [taskState, taskDispatch] = useReducer(reducerFunc, initialState);
  function handleAdd() {
    if (typedValue.trim()) {
      taskDispatch({
        type: "ADD",
        payload: { name: typedValue, id: Date.now() },
      });
      setTypedValue(" ");
    }
  }
  function handleDelete(id) {
    taskDispatch({ type: "DELETE", payload: { id } });
    console.log("hi");
  }
  return (
    <>
      <h1>Task Manager</h1>
      <p>{taskState.user.name}</p>
      <input
        type="text"
        value={typedValue}
        onChange={(e) => setTypedValue(e.target.value)}
      ></input>
      <button onClick={handleAdd}>ADD</button>
      <h3>Tasks:</h3>
      <ul>
        {taskState.tasks.map((task) => (
          <li key={task.id}>
            {task.name}{" "}
            <button onClick={() => handleDelete(task.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
