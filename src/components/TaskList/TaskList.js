import React from "react";
import './TaskList.css'
import Task from "../Task/Task";

const TaskList = ({tasks, onDeleted, handleDone, filter}) => {
    const taskList = tasks.map(task => {
        const {id, className, ...props} = task
        const el = (
            <li className={className} key={id}>
                <Task {...props}
                      onDeleted={() => onDeleted(id)} handleDone={()=> handleDone(id)}
                />
            </li>
        )
        if (filter === 'all') return el
        if (filter === 'active' && !task.done) return el
        if (filter === 'completed' && task.done) return el
    })
    return (
        <ul className="todo-list">
            {taskList}
        </ul>
    )
}

export default TaskList
