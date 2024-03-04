"use client";

import { Task } from "@/lib/types/types";
import { type FormEvent, useEffect, useMemo, useState } from "react";
import { uuid } from "uuidv4";

import { TiTick } from "react-icons/ti";

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  function addTask(e: FormData) {
    const task: Task = {
      id: uuid(),
      title: e.get("title") as string,
      completed: false,
    };
    setTasks([task, ...tasks]);
    setTitle("");
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify([task, ...tasks]));
    }
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks([...newTasks]);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify([...newTasks]));
    }
  }

  function setCompleteTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true };
      }

      return task;
    });

    setTasks([...newTasks]);
    if (typeof localStorage !== "undefined") {
      localStorage.setItem("tasks", JSON.stringify([...newTasks]));
    }
  }

  return (
    <section className="p-4">
      <form action={addTask}>
        <input
          type="text"
          name="title"
          placeholder="Enter task"
          id="task-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="task-button px-4 py-4 w-full" type="submit">
          Add Task
        </button>
      </form>
      <ul id="task-list" className="mt-8 flex flex-col items-center">
        {tasks.map((task, index) => (
          <li
            key={index + 10 * 2.3}
            id="task"
            className="flex flex-col gap-4 w-[150%] md:w-full"
          >
            <h1 className="font-semibold text-lg">{task.title}</h1>
            <div className="flex gap-10 mt-4">
              <button
                type="button"
                className="task-button px-4 py-2 w-full"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
              {task.completed ? (
                <div className="flex items-center justify-center gap-3">
                  Completed <TiTick color="green" className="size-6" />
                </div>
              ) : (
                <button
                  type="button"
                  className="task-button px-4 py-2 w-full"
                  onClick={() => setCompleteTask(task.id)}
                >
                  Mark as complete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
