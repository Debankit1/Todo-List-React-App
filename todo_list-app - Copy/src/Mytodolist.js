import React, { useState } from "react";
import "./App.css";

function MytodoList() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);
  const [newIndex, setNewIndex] = useState("");
  const [editclick, setEditClick] = useState(false);

  const handleAdd = () => {
    if (editclick) {
      const updatedData = [...task];
      updatedData[newIndex] = {
        ...updatedData[newIndex],
        inputvalue: input,
      };
      setTask(updatedData);
      setInput("");
    } else {
      const newTask = { inputvalue: input };
      setTask((t) => [...t, newTask]);
      setInput("");
    }
  };
  const handleedit = (index) => {
    const data = task[index];
    setInput(data.inputvalue);
    setNewIndex(index);
    setEditClick(true);
  };

  const inputValue = (event) => {
    setInput(event.target.value);
  };
  const handleDelete = (index) => {
    setTask(task.filter((_, ind) => ind !== index));
  };

  const handleUparrow = (ind) => {
    if (ind === 0) return; //it is the first index element return nothing
    const newTask = [...task];
    [newTask[ind - 1], newTask[ind]] = [newTask[ind], newTask[ind - 1]];
    setTask(newTask);
  };
  const handleDownarrow = (index) => {
    if (index === task.length - 1) return; //last index element return nothing
    const newTask = [...task];
    [newTask[index], newTask[index + 1]] = [newTask[index + 1], newTask[index]];
    setTask(newTask);
  };
  return (
    <div class="container-class">
      <h2>To-Do-List</h2>
      <input
        class="input-value"
        type="text"
        placeholder="Enter a Task"
        value={input}
        onChange={inputValue}
      />
      <button id="btn" onClick={handleAdd}>
        {editclick === true ? "Update" : "Add"}
      </button>
      <ul>
        {task.map((tasks, index) => (
          <li key={index} id="list">
            {tasks.inputvalue} &nbsp;
            <button class="editbtn" onClick={() => handleedit(index)}>
              Edit
            </button>
            &nbsp;
            <button id="up-arrow" onClick={() => handleUparrow(index)}>
              ↑
            </button>{" "}
            &nbsp;
            <button id="down-arrow" onClick={() => handleDownarrow(index)}>
              ↓
            </button>
            &nbsp;
            <button id="del-btn" onClick={() => handleDelete(index)}>
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default MytodoList;
