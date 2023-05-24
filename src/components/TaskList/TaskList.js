import React from "react";
import './TaskList.css'
import Task from "../../Task/Task";

const TaskList = ({tasks}) => {


    const taskList = tasks.map(task => {
        const {id, className, ...props} = task
        return (
            <li className={className} key={id}>
                <Task {...props}/>
            </li>
        )
    })
    return (
        <ul className="todo-list">
            {taskList}
        </ul>
    )
}

export default TaskList
