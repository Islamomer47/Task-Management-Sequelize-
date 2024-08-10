// src/pages/Tasks.jsx
import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../utils/api";
import "../styles/tasks.css"; // Import the new CSS file

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await getTasks(token);
        setTasks(response.data.tasks);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    };
    fetchTasks();
  }, [token]);

  const handleCreateTask = async () => {
    try {
      await createTask({ title, description }, token);
      setTitle("");
      setDescription("");
      const response = await getTasks(token);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Failed to create task", error);
    }
  };

  const handleUpdateTask = async () => {
    try {
      await updateTask(editingTask.id, { title, description }, token);
      setEditingTask(null);
      setTitle("");
      setDescription("");
      const response = await getTasks(token);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId, token);
      const response = await getTasks(token);
      setTasks(response.data.tasks);
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  return (
    <div className="tasks-container">
      <h2 className="tasks-title">Tasks</h2>
      <div className="task-form">
        <h3 className="form-title">
          {editingTask ? "Edit Task" : "Create Task"}
        </h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            rows="4"
          />
        </div>
        <button
          onClick={editingTask ? handleUpdateTask : handleCreateTask}
          className="form-button"
        >
          {editingTask ? "Update Task" : "Create Task"}
        </button>
      </div>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <h4 className="task-title">{task.title}</h4>
            <p className="task-description">{task.description}</p>
            <div className="task-actions">
              <button
                onClick={() => {
                  setEditingTask(task);
                  setTitle(task.title);
                  setDescription(task.description);
                }}
                className="task-edit"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="task-delete"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
