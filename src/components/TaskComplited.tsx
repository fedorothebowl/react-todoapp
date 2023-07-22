import { AiFillDelete } from "react-icons/ai";

interface Props {
  tasks: Task[];
  onClickDeleteTask: (index: number) => void;
}

interface Task {
  title: string;
  id: number;
}

function TaskComplited({ tasks, onClickDeleteTask }: Props) {

  return (
    <ul className="text-sm">
      {tasks.map((task, index) => (
        <li key={index} className="border-b py-2 opacity-50">
          <div className="flex justify-between w-full items-center">
            <div className="flex items-center space-x-2">
            <input
                  className="h-4 w-4 cursor-pointer"
                  type="checkbox"
                  name={"loop-" + task.id}
                  id={"loop-" + String(task.id)}
                  checked
                />
                <label className="cursor-pointer" htmlFor={"task-" + task.id}>{task.title}</label>
            </div>
            {/* <AiFillDelete
              color="black"
              className="cursor-pointer"
              onClick={() => onClickDeleteTask(index)}
            /> */}

          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskComplited;
