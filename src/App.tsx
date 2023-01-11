import React, { useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [allTasks, setAllTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    setAllTasks((prevAllTasks) => [...prevAllTasks, newTask]);
    setNewTask("");
  }

  function handleChange(event: any) {
    setNewTask(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          name="task"
          value={newTask}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
      <Overview tasks={allTasks} />
    </div>
  );
}

export default App;
