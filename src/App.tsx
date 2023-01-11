import React, { useState, useEffect } from "react";

function App() {
  const [allTasks, setAllTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit() {}

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
    </div>
  );
}

export default App;
