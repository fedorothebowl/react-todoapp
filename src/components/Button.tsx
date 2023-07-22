interface Props{
    onClickAddTask: () => void
}

function Button({onClickAddTask} : Props) {
  return (
    <button className="bg-c-blue text-white px-4 rounded-xl shadow-md py-1 font-fredoka fixed right-0 left-0 mx-auto inline-block w-max bottom-20" onClick={onClickAddTask}>Add Task</button>
  )
}

export default Button