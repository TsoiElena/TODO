import React from "react";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

const Header = ({addNewTask}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <NewTaskForm addNewTask={addNewTask}/>
        </header>
    )
}

export default Header
