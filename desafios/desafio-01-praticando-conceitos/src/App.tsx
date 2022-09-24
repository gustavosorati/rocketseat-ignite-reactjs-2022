import { FormEvent, useEffect, useState } from "react";
import { Header } from "./components/Header/Header"
import { Tasks } from "./components/Tasks/Tasks";

import './global.css'

export interface ITask {
  id: number;
  isCompleted: boolean;
  content: string;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const tasksExists = localStorage.getItem('tasks');
    if(tasksExists) setTasks(JSON.parse(tasksExists));
  }, []);

  function saveTask(tasks: ITask[]){
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  function addTask(task: string) {
    let newTask = {} as ITask;

    if(tasks.length > 0){
      newTask = {
        id: tasks[tasks.length - 1].id + 1,
        isCompleted: false,
        content: task
      }
    } else {
      newTask = {
        id: 1,
        isCompleted: false,
        content: task
      }
    }

    setTasks([...tasks, newTask]);

    const tasksToSave = tasks;
    tasksToSave.push(newTask);
    saveTask(tasksToSave);
  }

  function deleteTask(id: number){
    const tasksWithoutDeletedOne = tasks.filter(task => task.id !== id);
    setTasks(tasksWithoutDeletedOne);

    saveTask(tasksWithoutDeletedOne);
  }

  function changeTaskStatus(id: number) {
    const filteredTasks = tasks.map(task => {
      if(task.id === id) {
        task.isCompleted = !task.isCompleted
      }

      return task
    });

    setTasks(filteredTasks);
  }

  return (
    <>
      <Header onAddTask={addTask}/>
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTask}
        onChangeTaskStatus={changeTaskStatus}
      />
    </>
  )
}

export default App
