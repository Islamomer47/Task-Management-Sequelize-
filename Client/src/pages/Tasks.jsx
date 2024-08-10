import React, { useState, useEffect } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../utils/api";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editingTaskId, setEditingTaskId] = useState(null); // Track which task is being edited
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
      await updateTask(editingTaskId, { title, description }, token);
      setEditingTaskId(null);
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

  const startEditing = (task) => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Tasks</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
        <button
          onClick={editingTaskId ? handleUpdateTask : handleCreateTask}
          className="mt-4 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {editingTaskId ? "Update Task" : "Add Task"}
        </button>
      </div>
      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {task.title}
            </h3>
            <p className="text-gray-600 mt-2">{task.description}</p>
            <div className="mt-4 flex space-x-4">
              <button
                onClick={() => startEditing(task)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-600 hover:underline"
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
