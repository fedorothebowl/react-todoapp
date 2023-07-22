import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

interface Props {
  tasks: Task[];
  onClickDeleteTask: (index: number) => void;
  onClickComplete?: (id: number, taskInput: string[]) => void;
  isComplited?: Boolean;
}

interface Task {
  value: string;
  id: number;
}

function Task({
  tasks,
  onClickDeleteTask,
  onClickComplete,
  isComplited,
}: Props) {
  
  const [taskInput, setTaskInputs] = useState<Task[]>(() =>
    tasks.map((task) => ({ id: task.id, value: "" }))
  );

  const handleInputChange = (taskId: number, value: string) => {
    setTaskInputs((tasks) =>
      tasks.map((taskInput) =>
        taskInput.id === taskId ? { ...taskInput, value } : taskInput
      )
    );
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} className="border-b py-2">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center space-x-2 w-full">
              <input
                className="h-4 w-4 cursor-pointer"
                type="checkbox"
                name={"loop-" + String(task.id)}
                id={"loop-" + String(task.id)}
                checked={isComplited ? true : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onClickComplete && onClickComplete(task.id, taskInput);
                }}
              />

              <input
                className="outline-none w-full focus:bg-orange-100"
                type="text"
                placeholder="..."
                id={"task-" + String(task.id)}
                name={"task-" + String(task.id)}
                value={task.value}
                // onChange={(e) => handleInputChange(task.id, e.target.value)}
              />
            </div>

            <AiFillDelete
              color="black"
              className="cursor-pointer"
              onClick={() => onClickDeleteTask(task.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Task;
