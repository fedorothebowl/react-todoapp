import { useState } from "react";
import Task from "./components/Task";
import Button from "./components/Button";
import TaskComplited from "./components/TaskComplited";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskComplited, setTasksComplited] = useState<Task[]>([]);

  const newItem = { value: "", id: Math.floor(Math.random() * 1000) }; // Set default value for title

  const completedTask = (id: number, taskInput: string) => {
    // filtro tasks per trovare l'elemento che ho cliccato
    const filteredTask = tasks.find((task) => task.id === id);
    filteredTask && (filteredTask.value = taskInput[0]);

    // se esiste lo assegno all'array Complited
    if (filteredTask) {
      setTasksComplited((taskComplited) => [...taskComplited, filteredTask]);
      deleteTask(id);
    }
  };

  const addNewTask = () => {
    setTasks((prevTasks) => [...prevTasks, newItem]);
  };

  const deleteTask = (id: number) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks);
  };

  return (
    <>
      <div className="h-screen w-screen flex items-center justify-center">
        <div className="relative overflow-auto bg-white px-12 pt-6 pb-12 shadow-md max-w-[990px] w-11/12 h-[90vh] my-20">
          <h1 className="text-36 font-fredoka pb-2">My tasks</h1>
          <hr />
          <Task
            tasks={tasks}
            onClickDeleteTask={deleteTask}
            onClickComplete={completedTask}
          />
          <hr className="mt-20" />
          <h1 className="text-36 font-fredoka pb-2">Complited</h1>
          <hr />
          <TaskComplited tasks={taskComplited} onClickDeleteTask={deleteTask}/>
          <Button onClickAddTask={addNewTask} />
        </div>
      </div>
    </>
  );
}

export default App;

// stato della task Complited/not
// add task
// edit task
